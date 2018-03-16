import { connect } from 'react-redux'
import { fetchFilmById } from '../actions/films'
import FilmView from '../components/FilmView'

const mapStateToProps = (state, ownParams) => {
    return {
        film: state.film,
        id: ownParams.match.params.id,
        userToken: state.userToken,
        error: state.filmsErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilm: (id) => {
            dispatch(fetchFilmById(id))
        }
    }
}

const FilmPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmView)

export default FilmPage;