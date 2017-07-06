import React, { Component } from 'react'
import CommentList from '../CommentList'
import './index.css'

export default class Article extends Component {    
    render() {
        const { article, articleOpen, openedArticleId} = this.props;
        const body = article.id === openedArticleId
                  ? <section>{article.text}</section>
                  : null
        
        return (
            <div className={'article'}>
                <h1 onClick={articleOpen}>{article.title}</h1>
                {body}
                <CommentList comments = { article.comments }/> 
            </div>
        )  
    }
}