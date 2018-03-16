import axios from 'axios';
import { fetchFilmById } from './films'

const url = 'http://localhost:8000/api/ratings';

export const addNewRating = ({ filmId, score }) => {
    return (dispatch, getState) => {
        axios.post(url, {
            filmId, score,
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(fetchFilmById(filmId));
        }).catch(error => {
            if (error.response)
                dispatch(errorReceived(error.response.data.message));
            else
                dispatch(errorReceived(error.message));
        });
    }
}

export const updateRating = ({ id, filmId, score }) => {
    return (dispatch, getState) => {
        axios.put(`${url}/${id}`, {
            filmId, score,
        }, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(({ data }) => {
            dispatch(fetchFilmById(data.filmId));
        }).catch(error => {
            if (error.response)
                dispatch(errorReceived(error.response.data.message));
            else
                dispatch(errorReceived(error.message));
        });
    }
}

export const deleteRating = ({ id, filmId }) => {
    return (dispatch, getState) => {
        axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: 'JWT ' + getState().userToken
            }
        }).then(() => {
                dispatch(fetchFilmById(filmId));
        }).catch(error => {
            if (error.response)
                dispatch(errorReceived(error.response.data.message));
            else
                dispatch(errorReceived(error.message));
        });
    }
}

export const errorReceived = message => {
    return {
        type: 'RATINGS_ERROR',
        msg: message
    }
}

export const resetError = () => {
    return {
        type: 'RESET_RATINGS_ERROR',
        msg: ''
    }
}
