import axios from 'axios';
import { fetchFilmById } from './films'

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiODM2MjA2YTUtOTkzNS00ZTNmLWE5YzktYzdhNDYxNDliYjdkIiwiaWF0IjoxNTIwNDI4MDA5fQ.HHWAmaIDlprWIRbZo7j0xLFyEfsr5lnzicSKcbQ4JrE';
const url = 'http://localhost:8000/api/ratings';
const authHeader = { Authorization: 'JWT ' + jwtToken }

const instance = axios.create({
    baseURL: url,
    headers: authHeader
});

export const addNewRating = ({ filmId, score }) => {
    return dispatch => {
        instance.post(url, {
            filmId, score,
        }).then(({ data }) => {
            dispatch(fetchFilmById(filmId));
        }).catch(error => console.log(error));
    }
}

export const updateRating = ({ id, filmId, score }) => {
    return dispatch => {
        instance.put(`${url}/${id}`, {
            filmId, score,
        }).then(({ data }) => {
            dispatch(fetchFilmById(data.filmId));
        }).catch(error => console.log(error));
    }
}

export const deleteRating = ({ id, filmId }) => {
    return dispatch => {
        instance.delete(`${url}/${id}`)
            .then(() => {
                dispatch(fetchFilmById(filmId));
            })
            .catch(error => console.log(error));
    }
}