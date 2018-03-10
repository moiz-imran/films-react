import { combineReducers } from 'redux'
import films from './films'
import film from './film'

const filmsApp = combineReducers({
    films,
    film
})

export default filmsApp