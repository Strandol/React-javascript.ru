import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type } = action;
    if (!callAPI) return next(action)
    
    next({
        type: type + START
    })
    
    fetch(callAPI) 
    .then((response) => {
        response.json()
        .then((data) => {
             next({type: type + SUCCESS, data})
        })
    })
    .catch((err) => {
        next({type: type + FAIL, err})
    })
}