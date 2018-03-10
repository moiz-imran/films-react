const film = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILM':
            return action.film;
        default:
            return state;
    }
}

export default film;