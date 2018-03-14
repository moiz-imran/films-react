const ratingsErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'RATINGS_ERROR':
            return action.msg ? action.msg : null;
        default:
            return state;
    }
}

export default ratingsErrorMessage;