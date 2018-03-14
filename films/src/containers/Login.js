import { connect } from 'react-redux'
import { logIn } from '../actions/user'
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
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal)

export default Login;