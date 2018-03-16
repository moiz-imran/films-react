import { connect } from 'react-redux'
import { fetchProfile, updateProfile, changePassword, logOut } from '../actions/user'
import UserDropDown from '../components/UserDropDown'

const mapStateToProps = state => {
    return {
        user: state.userProfile,
        error: state.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch(fetchProfile())
        },
        editUser: (data) => {
            dispatch(updateProfile(data))
        },
        changePassword: (data) => {
            dispatch(changePassword(data))
        },
        logout: () => {
            dispatch(logOut())
        }
    }
}

const UserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDropDown)

export default UserInfo;