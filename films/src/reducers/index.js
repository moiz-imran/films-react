import { combineReducers } from 'redux'
import films from './films'
import film from './film'
import userProfile from './userProfile'
import userToken from './userToken'
import filteredFilms from './filteredFilms'
import errorMessage from './errorMessage'

const filmsApp = combineReducers({
    films,
    film,
    userProfile,
    userToken,
    filteredFilms,
    errorMessage
})

export default filmsApp