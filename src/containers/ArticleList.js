import React, { Component } from 'react';
import _ from 'lodash'
import Article from './Article';
import CommentList from './CommentList';
import articleOpen from '../decorators/oneOpen'

class ArticleList extends Component {
    render() {      
        if (!this.props.articles) {
            return (
                <div>There is no articles...</div>
            )
        }
        
        let listItems = this.props.articles.map((article) => {          
            return (
                <li key={article.id}>
                    <Article 
                        article = {article} 
                        articleOpen = {this.props.oneOpen(article.id)}
                        openedArticleId = {this.props.openedItemId}
                    />
                    <CommentList comments = { article.comments }/> 
                </li>
            )
        })
        
        return (
            <ul>{listItems}</ul>
        )
    } 
}

export default articleOpen(ArticleList)