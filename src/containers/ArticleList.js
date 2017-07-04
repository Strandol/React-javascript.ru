import React, { Component } from 'react';
import Article from './Article';
import CommentList from './CommentList';
import _ from 'lodash'

export default class ArticleList extends Component {
    render() {      
        if (!this.props.articles) {
            return (
                <div>There is no articles...</div>
            )
        }
        let listItems = this.props.articles.map((article) => {          
            return (
                <li key={article.id}>
                    <h1>HeLLO</h1>
                    <Article article = {article}/>
                    <CommentList comments = { article.comments }/> 
                </li>
            )
        })
        
        return (
            <ul>{listItems}</ul>
        )
    } 
}
