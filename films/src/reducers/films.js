const films = (state = [], action) => {
    switch (action.type) {
        case 'GET_FILMS_LIST':
            return action.films;
        case 'ADD_FILM':
            return [...state, action.film];
        case 'UPDATE_FILM':
            return state.map(film => 
                (film.id === action.id)
                ? {...film, title: action.title, description: action.description, year: action.year, img_url: action.img_url}
                : film
            );
        case 'DELETE_FILM':
            let index;
            state.forEach((film, i) => {
                if (film.id === action.id) {
                    index = i;
                }
            })
            return [...state.slice(0, index), ...state.slice(index + 1)]
        default:
            return state;
    }
}

export default films;