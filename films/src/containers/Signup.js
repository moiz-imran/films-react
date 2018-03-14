import { connect } from 'react-redux'
import { signUp, resetError } from '../actions/user'
import SignupModal from '../components/SignupModal'

const mapStateToProps = state => {
    return {
        userToken: state.userToken,
        error: state.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (data) => {
            dispatch(signUp(data));
        },
        resetError: () => {
            dispatch(resetError());
        }
    }
}

const Signup = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupModal)

export default Signup;