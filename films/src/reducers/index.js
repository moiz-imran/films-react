import { combineReducers } from 'redux'
import films from './films'
import film from './film'
import userProfile from './userProfile'
import userToken from './userToken'
import filteredFilms from './filteredFilms'
import userErrorMessage from './userErrorMessage'
import filmsErrorMessage from './filmsErrorMessage'
import ratingsErrorMessage from './ratingsErrorMessage'
import storageState from './storageState'

const filmsApp = combineReducers({
    films,
    film,
    userProfile,
    userToken,
    filteredFilms,
    userErrorMessage,
    filmsErrorMessage,
    ratingsErrorMessage,
    storageState
})

export default filmsApp