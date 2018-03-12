const filteredFilms = (state = [], action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULTS':
            return action.films;
        default:
            return state;
    }
}

export default filteredFilms;