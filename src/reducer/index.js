import articles from './articles'
import filters from './filters'
import { combineReducers } from 'redux'

export default combineReducers({
    articles,
    filters
})