import articles from './articles'
import filters from './filters'
import comments from './comments'
import { combineReducers } from 'redux'

export default combineReducers({
    articles,
    filters,
    comments
})