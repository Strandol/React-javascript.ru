import * as actions from '../constants'
import { normalizedArticles } from '../content/fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    'id': '',
    'date': '',
    'title': '',
    'text': '',
    'comments': []
})

const initialState = {
    articles: recordsFromArray(Article, normalizedArticles),
    selectedArticles: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case actions.DELETE_ARTICLE:
          return Object.assign({}, state, {
              articles: state.articles.delete(action.id)
          })
          break;
      case actions.SELECT_ARTICLES:
          return Object.assign({}, state, {
              selectedArticles: action.selectedArticles
          })
          break;
      default:
          return Object.assign({}, state);
          break;
    }
}