import * as actions from '../constants'
import { Record, Map } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    'id': null,
    'user': '',
    'text': ''
})

const initialState = recordsFromArray(Comment, [])
  

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.ADD_COMMENT:
            return state.comments.set(action.id, {
                id: action.id,
                user: action.content.user,
                text: action.content.text
            })
            break;
        case actions.LOAD_ALL_COMMENTS + actions.FAIL:
            console.error(action.err);
            return state;
            break;
        case actions.LOAD_ALL_COMMENTS + actions.SUCCESS:
            return recordsFromArray(Comment, action.data)
            break;
        default:
            return state
    }
}