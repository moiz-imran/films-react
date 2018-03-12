import { combineReducers } from 'redux'
import films from './films'
import film from './film'
import userProfile from './userProfile'
import userToken from './userToken'

const filmsApp = combineReducers({
    films,
    film,
    userProfile,
    userToken
})

export default filmsApp