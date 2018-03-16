import React from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import SearchResults from './SearchResults'
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            showResults: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    componentDidMount() {
        this.props.fetchFilms();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error === 'Network Error') {
            this.props.history.push('/error');
        }
    }

    handleClick() {
        this.setState({ showResults: false, searchQuery: '' });
    }

    searchUpdated(term) {
        if (term !== '') {
            this.setState({ showResults: true })
        } else {
            this.setState({ showResults: false })            
        }

        this.setState({ searchQuery: term })
    }

    render() {
        const { films } = this.props;
        const filteredresults = films.filter(createFilter(this.state.searchQuery, ['title', 'description']))
        return (
            <div>
                <SearchInput onChange={this.searchUpdated} fuzzy={true} sortResults={true} value={this.state.searchQuery} />
                {this.state.showResults && <SearchResults results={filteredresults} onClick={this.handleClick} />}
            </div>
        )
    }
}

export default withRouter(SearchBar);