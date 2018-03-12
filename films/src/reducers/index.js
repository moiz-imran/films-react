import { combineReducers } from 'redux'
import films from './films'
import film from './film'
import userProfile from './userProfile'
import userToken from './userToken'
import filteredFilms from './filteredFilms'

const filmsApp = combineReducers({
    films,
    film,
    userProfile,
    userToken,
    filteredFilms
})

export default filmsApp