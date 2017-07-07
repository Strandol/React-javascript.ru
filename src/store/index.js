import { createStore } from 'redux'
import reducer from '../reducer'
import { articles } from '../content/fixtures'

const store = createStore(reducer, {});

export default store
