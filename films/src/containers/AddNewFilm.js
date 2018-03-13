import { connect } from 'react-redux'
import { addNewFilm } from '../actions/films'
import AddFilmModal from '../components/AddFilmModal'

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        openModal: ownProps.openModal,
        closeModal: ownProps.closeModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFilm: (data) => {
            dispatch(addNewFilm(data))
        }
    }
}

const AddNewFilm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFilmModal)

export default AddNewFilm;