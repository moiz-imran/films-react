import React from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import SearchResults from './SearchResults'

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
            <div id='form'>
                <SearchInput className="searchBar" onChange={this.searchUpdated} fuzzy={true} sortResults={true} value={this.state.searchQuery} />
                {this.state.showResults && <SearchResults results={filteredresults} onClick={this.handleClick} />}
            </div>
        )
    }
}

export default SearchBar;