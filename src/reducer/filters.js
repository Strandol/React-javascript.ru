import * as actions from '../constants'

export default function(days = {day: {from: null, to: null}}, action) {
    switch (action.type) {
      case actions.SET_DAY_RANGE:
          return Object.assign({}, days, {
              day: action.day
          })
          break;
      case actions.RESET_DAYS:
          return Object.assign({}, days, {
              day: {
                  from: null,
                  to: null
              }
          })
          break;
      default:
          return days;
          break;
    }
}