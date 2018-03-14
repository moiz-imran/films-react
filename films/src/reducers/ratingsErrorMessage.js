const ratingsErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'RATINGS_ERROR':
            return action.msg ? action.msg : null;
        case 'RESET_RATINGS_ERROR':
            return action.msg;
        default:
            return state;
    }
}

export default ratingsErrorMessage;