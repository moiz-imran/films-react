import { connect } from 'react-redux'
import { fetchFilteredFilms } from '../actions/films'
import FilmsList from '../components/FilmsList'

const mapStateToProps = state => {
    return {
        films: state.filteredFilms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: () => {
            dispatch(fetchFilteredFilms())
        }
    }
}

const FilmCatalog = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList)

export default FilmCatalog;