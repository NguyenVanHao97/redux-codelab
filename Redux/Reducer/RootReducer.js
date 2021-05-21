import {combineReducers} from 'redux'
import {RecipesReducer} from './RecipesReducer'
import {userReducer} from './UserReducer'

export const rootReducer = combineReducers({
    RecipesReducer,
    userReducer
})