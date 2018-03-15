import { connect } from 'react-redux'
import { resetError, changePassword } from '../actions/user'
import PasswordModal from '../components/PasswordModal'

const mapStateToProps = state => {
    return {
        userToken: state.userToken,
        error: state.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePassword: (data) => {
            dispatch(changePassword(data));
        },
        resetError: () => {
            dispatch(resetError());
        }
    }
}

const ChangePassword = connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordModal)

export default ChangePassword;