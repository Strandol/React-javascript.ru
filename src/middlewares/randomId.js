import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    if (action.withRandomId) {
        action.id = getRandomId();
    }

    next(action);
}

function getRandomId() {
    return Math.floor(Math.random() * (5000000 - 1000000)) + 1000000;
}