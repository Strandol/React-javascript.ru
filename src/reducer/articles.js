import * as actions from '../constants'
import { articles } from '../content/fixtures'

let initialState = {
    articles,
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