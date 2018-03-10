import axios from 'axios';

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiODM2MjA2YTUtOTkzNS00ZTNmLWE5YzktYzdhNDYxNDliYjdkIiwiaWF0IjoxNTIwNDI4MDA5fQ.HHWAmaIDlprWIRbZo7j0xLFyEfsr5lnzicSKcbQ4JrE';
const url = 'http://localhost:8000/api/films';
const authHeader = { Authorization: 'JWT ' + jwtToken }

const instance = axios.create({
    baseURL: url,
    headers: authHeader
});

export const fetchFilms = (
    limit = 20,
    offset = 0,
    ids = '',
    max_year = '',
    min_year = '',
    searchString = ''
) => {
    return dispatch => {
        instance.get(url, {
            params: {
                limit: limit,
                offset: offset,
                ids: ids,
                max_year: max_year,
                min_year: min_year,
                title: searchString,
                description: searchString
            }
        }).then(({ data: { results } }) => {
            dispatch(fetchFilmsAction(results));
        }).catch(error => console.log(error));
    }
}

export const fetchFilmsAction = (data) => {
    return {
        type: 'GET_FILMS_LIST',
        films: data
    };
}

export const fetchFilmById = (id) => {
    return dispatch => {
        instance.get(`${url}/${id}`)
        .then(({ data }) => {
            dispatch(fetchFilmByIdAction(data));
        }).catch(error => console.log(error));
    }
}

export const fetchFilmByIdAction = (data) => {
    return {
        type: 'GET_FILM',
        film: data
    }
}

export const addNewFilm = ({ title, description = '', year = '', img_url = '' }) => {
    return dispatch => {
        instance.post(url, {
            title, description, year, img_url,
        }).then(({ data }) => {
            dispatch(addNewFilmAction(data));
            dispatch(fetchFilmByIdAction(data));
        }).catch(error => console.log(error));
    }
}

export const addNewFilmAction = (data) => {
    return {
        type: 'ADD_FILM',
        film: data
    }
}

export const updateFilm = ({ id, title = '', description = '', year = '', img_url = '' }) => {
    return dispatch => {
        instance.put(`${url}/${id}`, {
            title, description, year, img_url,
        }).then(({ data }) => {
            dispatch(updateFilmAction(data));
            dispatch(fetchFilmByIdAction(data));
        }).catch(error => console.log(error));
    }
}

export const updateFilmAction = (data) => {
    return {
        type: 'UPDATE_FILM',
        ...data
    }
}

export const deleteFilm = (id) => {
    return dispatch => {
        instance.delete(`${url}/${id}`)
        .then(() => {
            dispatch(deleteFilmAction(id))
        })
        .catch(error => console.log(error));
    }
}

export const deleteFilmAction = (id) => {
    return {
        type: 'DELETE_FILM',
        id: id
    }
}