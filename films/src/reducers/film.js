const film = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILM':
            return action.film;
        case 'DELETE_FILM':
            return {};
        default:
            return state;
    }
}

export default film;