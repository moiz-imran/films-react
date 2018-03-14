const userErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'USER_ERROR':
            return action.msg ? action.msg : null;
        case 'RESET_USER_ERROR':
            return action.msg;
        default:
            return state;
    }
}

export default userErrorMessage;