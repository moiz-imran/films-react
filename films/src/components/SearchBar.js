import React from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import SearchResults from './SearchResults'

import './styles.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            showResults: false
        }

        this.searchUpdated = this.searchUpdated.bind(this);
    }

    componentDidMount() {
        this.props.fetchFilms();
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
        console.log(filteredresults)
        return (
            <div id='form'>
                <SearchInput className="searchBar" onChange={this.searchUpdated} />
                {this.state.showResults && <SearchResults results={filteredresults} />}
            </div>
        )
    }
}

export default SearchBar;