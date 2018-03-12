const userToken = (state = '', action) => {
    switch (action.type) {
        case 'SET_USER_TOKEN':
            return action.token;
        case 'LOGOUT_USER':
            return '';
        default:
            return state;
    }
}

export default userToken;