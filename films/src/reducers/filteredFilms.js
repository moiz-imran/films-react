const filteredFilms = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULTS':
            return action.films;
        case 'LOAD_MORE':
            return {...action.films, results: [...state.results, ...action.films.results]};
        default:
            return state;
    }
}

export default filteredFilms;