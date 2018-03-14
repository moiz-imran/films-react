import axios from 'axios'

const url = 'http://localhost:8000/api/films';

export const fetchFilteredFilms = ({
    limit = 20,
    offset = 0,
    ids = '',
    max_year = '',
    min_year = '',
    searchString = ''
}) => {
    return (dispatch, getState) => {
        axios.get(url, {
            params: {
                limit: limit,
                offset: offset,
                ids: ids,
                max_year: max_year,
                min_year: min_year,
                title: searchString,
                description: searchString
            },
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(fetchSearchAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const fetchFilms = () => {
    return (dispatch, getState) => {
        axios.get(url, {
            params: {
                limit: 10000
            },
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data: { results } }) => {
            dispatch(fetchFilmsAction(results));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const fetchSearchAction = (data) => {
    return {
        type: 'GET_SEARCH_RESULTS',
        films: data        
    }
}

export const fetchFilmsAction = (data) => {
    return {
        type: 'GET_FILMS_LIST',
        films: data
    };
}

export const fetchFilmById = (id) => {
    return (dispatch, getState) => {
        axios.get(`${url}/${id}`, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        })
        .then(({ data }) => {
            dispatch(fetchFilmByIdAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const fetchFilmByIdAction = (data) => {
    return {
        type: 'GET_FILM',
        film: data
    }
}

export const addNewFilm = ({ title, description = '', year = '', img_url = '' }) => {
    return (dispatch, getState) => {
        axios.post(url, {
            title, description, year, img_url,
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(addNewFilmAction(data));
            dispatch(fetchFilmByIdAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const addNewFilmAction = (data) => {
    return {
        type: 'ADD_FILM',
        film: data
    }
}

export const updateFilm = ({ id, title = '', description = '', year = '', img_url = '' }) => {
    return (dispatch, getState) => {
        axios.put(`${url}/${id}`, {
            title, description, year, img_url,
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(updateFilmAction(data));
            dispatch(fetchFilmByIdAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const updateFilmAction = (data) => {
    return {
        type: 'UPDATE_FILM',
        ...data
    }
}

export const deleteFilm = (id) => {
    return (dispatch, getState) => {
        axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(() => {
            dispatch(deleteFilmAction(id))
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const deleteFilmAction = (id) => {
    return {
        type: 'DELETE_FILM',
        id: id
    }
}

export const loadMore = (nextUrl) => {
    return (dispatch, getState) => {
        axios.get(nextUrl, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(loadMoreAction(data));
        }).catch(({ response: { data } }) => {
            dispatch(errorReceived(data.message));
        });
    }
}

export const loadMoreAction = (data) => {
    return {
        type: 'LOAD_MORE',
        films: data
    }
}

export const errorReceived = message => {
    return {
        type: 'FILMS_ERROR',
        msg: message
    }
}
