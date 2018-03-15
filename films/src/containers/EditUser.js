import { connect } from 'react-redux'
import { updateProfile, resetError } from '../actions/user'
import EditUserModal from '../components/EditUserModal'

const mapStateToProps = state => {
    return {
        userProfile: state.userProfile,
        error: state.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (data) => {
            dispatch(updateProfile(data));
        },
        resetError: () => {
            dispatch(resetError());
        }
    }
}

const EditUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUserModal)

export default EditUser;