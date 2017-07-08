import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    switch (action.type) {
        case ADD_COMMENT:
            action.id = getRandomId();
            break;
        default:
            break;
    }
    next(action);
}

function getRandomId() {
    return Math.floor(Math.random() * (5000000 - 1000000)) + 1000000;
}