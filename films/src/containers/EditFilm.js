import { connect } from 'react-redux'
import { updateFilm } from '../actions/films'
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
        }
    }
}

const EditFilm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFilmModal)

export default EditFilm;