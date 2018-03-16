import { connect } from 'react-redux'
import { fetchFilteredFilms, loadMore } from '../actions/films'
import FilmsList from '../components/FilmsList'

const mapStateToProps = state => {
    return {
        films: state.filteredFilms,
        allFilms: state.films,
        error: state.filmsErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: (data) => {
            dispatch(fetchFilteredFilms(data))
        },
        loadMore: (url) => {
            dispatch(loadMore(url))
        } 
    }
}

const FilmCatalog = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList)

export default FilmCatalog;