import * as constants from '../constants'

export function loadAllArticles() {
    return {
        type: constants.LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadAllComments(id) {
    return {
        type: constants.LOAD_ALL_COMMENTS,
        callAPI: '/api/comment?article=' + id
    }
}

export function selectArticles(selectedArticles) {
    return {
        type: constants.SELECT_ARTICLES,
        selectedArticles
    }
}

export function deleteArticle(id) {
    return {
        type: constants.DELETE_ARTICLE,
        id
    }
}

export function addComment(articleId, content) {
    return {
        type: constants.ADD_COMMENT,
        articleId,
        content,
        id: null,
        withRandomId: true
    }
}

export function setDayRange(range) {
    return {
        type: constants.SET_DAY_RANGE,
        day: range
    }
}

export function resetDays() {
    return {
        type: constants.RESET_DAYS
    }
}