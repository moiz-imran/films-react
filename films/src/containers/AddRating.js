import { connect } from 'react-redux'
import { addNewRating } from '../actions/ratings'
import AddRatingModal from '../components/AddRatingModal'

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        showModal: ownProps.showModal,
        closeModal: ownProps.closeModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRating: (data) => {
            dispatch(addNewRating(data))
        }
    }
}

const AddRating = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRatingModal)

export default AddRating;