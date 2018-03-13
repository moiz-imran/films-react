import { connect } from 'react-redux'
import { updateFilm, deleteFilm } from '../actions/films'
import { withRouter } from 'react-router-dom';
import EditFilmModal from '../components/EditFilmModal'

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        showModal: ownProps.showModal,
        closeModal: ownProps.closeModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editFilm: (data) => {
            dispatch(updateFilm(data))
        },
        deleteFilm: (id) => {
            dispatch(deleteFilm(id))
        }
    }
}

const EditFilm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFilmModal)

export default withRouter(EditFilm);