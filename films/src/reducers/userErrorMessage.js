const userErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'USER_ERROR':
            return action.msg ? action.msg : null;
        default:
            return state;
    }
}

export default userErrorMessage;