import * as actions from '../constants'
import { Record, OrderedMap, Map, List } from 'immutable'
import { normalizedArticles } from '../content/fixtures'
import { recordsFromArray } from './utils'
import _ from 'lodash'

const Article = Record({
    'id': '',
    'date': '',
    'title': '',
    'text': '',
    'comments': []
})

const defaultArticles = recordsFromArray(Article, []);

const initialState = {
    articles: new Map({
        loading: false,
        loaded: false,
        errors: new List([]),
        entities: defaultArticles
    }),
    selectedArticles: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.DELETE_ARTICLE:
            let newSet = state.articles.deleteIn(["entities", action.id]);
            return Object.assign({}, state, {
                articles: newSet
            })
            break;
        case actions.SELECT_ARTICLES:
            return Object.assign({}, state, {
                selectedArticles: action.selectedArticles
            })
            break;
        case actions.ADD_COMMENT:
            return Object.assign({}, state, {
                articles: state.articles.updateIn(['entities', action.articleId, 'comments'], list => {
                    return [].concat(list, action.id)
                })
            });
            break;
        case actions.LOAD_ALL_ARTICLES + actions.FAIL:
            console.error(action.err);
            return state;
            break;
        case actions.LOAD_ALL_ARTICLES + actions.START:
            return Object.assign({}, state, {
                articles: state.articles.set('loading', true)
            });
            break;
        case actions.LOAD_ALL_ARTICLES + actions.SUCCESS:
            return Object.assign({}, state, {
                articles: state.articles
                    .set('loading', false)
                    .set('loaded', true)
                    .set('entities', recordsFromArray(Article, action.data.map((article) => {
                          let text = _.find(normalizedArticles, {"id": article.id}).text                        
                          article.text = text;
                          return article;
                    })))
            })
            break;
        default:
            return state;
            break;
    }
}