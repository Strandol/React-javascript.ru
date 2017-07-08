import * as actions from '../constants'
import { normalizedComments } from '../content/fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    'id': null,
    'user': '',
    'text': ''
})

const defaultComments = recordsFromArray(Comment, normalizedComments);

export default function (comments = defaultComments, action) {
    switch (action.type) {
        case actions.ADD_COMMENT:
            return comments.set(action.id, {
                id: action.id,
                user: action.content.user,
                text: action.content.text
            })
            break;
            default:
            return comments
    }
}