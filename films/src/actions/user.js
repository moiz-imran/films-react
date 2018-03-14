import axios from 'axios';

const url = 'http://localhost:8000/api/accounts';

export const fetchProfile = () => {
    return (dispatch, getState) => {
        axios.get(url + '/profile', {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            },
        }).then(({ data }) => {
            dispatch(fetchProfileAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const fetchProfileAction = (data) => {
    return {
        type: 'GET_PROFILE',
        profile: data
    }
}

export const updateProfile = ({ first_name, last_name, email }) => {
    return (dispatch, getState) => {
        axios.put(url + '/profile', {
            first_name, last_name, email            
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(fetchProfileAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const changePassword = ({ oldPassword, newPassword1, newPassword2 }) => {
    return (dispatch, getState) => {
        axios.put(url + '/profile/password', {
            oldPassword, newPassword1, newPassword2
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(setUserToken(data));            
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const logIn = ({ email, password }) => {
    return dispatch => {
        axios.post(url + '/login', {
            email, password
        }, {
            credentials: 'include'
        }).then(({ data }) => {
            dispatch(setUserToken(data));
        }).catch(({ response: {data} }) => {
            dispatch(errorReceived(data.message));            
        });
    }
}

export const setUserToken = (data) => {
    return {
        type: 'SET_USER_TOKEN',
        token: data
    }
}

export const errorReceived = message => {
    return {
        type: 'USER_ERROR',
        msg: message
    }
}

export const signUp = ({ email, username, password1, password2 }) => {
    return dispatch => {
        axios.post(url + '/signup', {
            email, username, password1, password2
        }).then(({ data }) => {
            dispatch(setUserToken(data));
        }).catch(({ response: {data} }) => {
            dispatch(errorReceived(data.message));            
        });
    }
}

export const logOut = () => {
    return (dispatch, getState) => {
        axios.get(url + '/logout', {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            },
        })
        .then(() => {
            dispatch(logOutAction())
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const logOutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}