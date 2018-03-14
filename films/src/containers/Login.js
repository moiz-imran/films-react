import { connect } from 'react-redux'
import { logIn, resetError } from '../actions/user'
import LoginModal from '../components/LoginModal'

const mapStateToProps = (state, ownProps) => {
    return {
        userToken: state.userToken,
        error: state.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (data) => {
            dispatch(logIn(data));
        },
        resetError: () => {
            dispatch(resetError());
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal)

export default Login;