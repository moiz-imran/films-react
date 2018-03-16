import { connect } from 'react-redux'
import { updateRating, deleteRating } from '../actions/ratings'
import ViewRatingsModal from '../components/ViewRatingsModal'

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        showModal: ownProps.showModal,
        closeModal: ownProps.closeModal,
        error: state.ratingsErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editRating: (data) => {
            dispatch(updateRating(data))
        },
        deleteRating: (data) => {
            dispatch(deleteRating(data))
        }
    }
}

const ViewRatings = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewRatingsModal)

export default ViewRatings;