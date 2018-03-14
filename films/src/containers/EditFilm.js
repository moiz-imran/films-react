import { connect } from 'react-redux'
import { updateFilm, deleteFilm, resetError } from '../actions/films'
import { withRouter } from 'react-router-dom';
import EditFilmModal from '../components/EditFilmModal'

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        showModal: ownProps.showModal,
        closeModal: ownProps.closeModal,
        error: state.filmsErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editFilm: (data) => {
            dispatch(updateFilm(data))
        },
        deleteFilm: (id) => {
            dispatch(deleteFilm(id))
        },
        resetError: () => {
            dispatch(resetError())
        } 
    }
}

const EditFilm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFilmModal)

export default withRouter(EditFilm);