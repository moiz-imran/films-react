const filmsErrorMessage = (state = '', action) => {
    switch (action.type) {
        case 'FILMS_ERROR':
            return action.msg ? action.msg : null;
        default:
            return state;
    }
}

export default filmsErrorMessage;