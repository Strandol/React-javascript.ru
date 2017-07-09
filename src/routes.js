import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import App from './containers/App'
import ArticleList from './containers/ArticleList'
import Filters from './containers/Filters'

export default (
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
             <Route path="articles" component = {ArticleList} />
             <Route path="filters" component = {Filters} />
        </Route>
    </Router>
)