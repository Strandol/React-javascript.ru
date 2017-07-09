import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import App from './containers/App'

export default (
    <Router history = {hashHistory}>
        <Route path="/articles" component = {App}/>
    </Router>
)