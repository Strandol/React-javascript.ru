import { articles, normalizedComments } from '../content/fixtures';
import ArticleList from './ArticleList';
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return(
            <div>
                <h1>Articles List</h1>
                <ArticleList articles = { articles } comments = { normalizedComments }/>
            </div>
        )
    }
}