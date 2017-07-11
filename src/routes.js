import React from 'react'
import { Router, hashHistory, browserHistory, Route } from 'react-router'
import App from './containers/App'
import ArticleList from './containers/ArticleList'
import ArticleContainer from './RouteHandlers/Article'
import Filters from './containers/Filters'
import Article from './components/Article'
import CommentList from './containers/CommentList'
import Comment from './components/Comment'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {App}>
             <Route path="articles" component = {ArticleList}>
                 <Route path=":id" component = {ArticleContainer} />
             </Route>
             <Route path="filters" component = {Filters} />
        </Route>
    </Router>
)