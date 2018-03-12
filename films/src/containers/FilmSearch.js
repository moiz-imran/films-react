import { connect } from 'react-redux'
import { fetchFilms } from '../actions/films'
import SearchBar from '../components/SearchBar'

const mapStateToProps = state => {
    return {
        films: state.films
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: () => {
            dispatch(fetchFilms())
        }
    }
}

const FilmSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)

export default FilmSearch;