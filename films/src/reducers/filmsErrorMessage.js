const filmsErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'FILMS_ERROR':
            return action.msg ? action.msg : null;
        case 'RESET_FILMS_ERROR':
            return action.msg;
        default:
            return state;
    }
}

export default filmsErrorMessage;