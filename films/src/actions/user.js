import axios from 'axios';

const url = 'http://localhost:8000/api/accounts';
const instance = axios.create({
    baseURL: 'http://localhost:8000/api/accounts',
    // withCredentials: true
});

export const fetchProfile = () => {
    return (dispatch, getState) => {
        instance.get(url + '/profile', {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            },
        }).then(({ data }) => {
            dispatch(fetchProfileAction(data));
        }).catch(error => console.log(error));
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
        instance.put(url + '/profile', {
            first_name, last_name, email            
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(fetchProfileAction(data));
        }).catch(error => console.log(error));
    }
}

export const changePassword = ({ oldPassword, newPassword1, newPassword2 }) => {
    return (dispatch, getState) => {
        instance.put(url + '/profile/password', {
            oldPassword, newPassword1, newPassword2
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(setUserToken(data));            
        }).catch(error => console.log(error));
    }
}

export const logIn = ({ email, password }) => {
    return dispatch => {
        instance.post(url + '/login', {
            email, password
        }, {
            credentials: 'include'
        }).then(({ data }) => {
            dispatch(setUserToken(data));
        }).catch(error => console.log(error));
    }
}

export const setUserToken = (data) => {
    return {
        type: 'SET_USER_TOKEN',
        token: data
    }
}

export const signUp = ({ email, username, password1, password2 }) => {
    return dispatch => {
        instance.post(url + '/signup', {
            email, username, password1, password2
        }).then(({ data }) => {
            dispatch(setUserToken(data));
        }).catch(error => console.log(error));
    }
}

export const logOut = () => {
    return (dispatch, getState) => {
        instance.get(url + '/logout', {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            },
        })
        .then(() => {
            dispatch(logOutAction())
        }).catch(error => console.log(error));
    }
}

export const logOutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}