import * as actions from '../constants'
import { normalizedArticles } from '../content/fixtures'
import { OrderedMap, Record } from 'immutable'

const Article = Record({
    'id': '',
    'date': '',
    'title': '',
    'text': '',
    'comments': []
})

const initialState = {
    articles: normalizedArticles.reduce((acc, item) => {
        return acc.set(item.id, new Article(item))
    }, new OrderedMap({})),
    selectedArticles: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case actions.DELETE_ARTICLE:
          return Object.assign({}, state, {
              articles: state.articles.filter((article) => {
                  return article.id != action.id
              })
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