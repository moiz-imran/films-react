import { connect } from 'react-redux'
import { addNewFilm, resetError } from '../actions/films'
import AddFilmModal from '../components/AddFilmModal'

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
        addFilm: (data) => {
            dispatch(addNewFilm(data))
        },
        resetError: () => {
            dispatch(resetError())
        }
    }
}

const AddNewFilm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFilmModal)

export default AddNewFilm;