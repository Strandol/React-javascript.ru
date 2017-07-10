import React, { Component } from 'react'
import CommentList from '../../containers/CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import './index.css'

export default class Article extends Component {    
    render() {
        const { article, articleOpen, openedArticleId, deleteArticle } = this.props;
        const body = article.id === openedArticleId
                  ? <section>{article.text}</section>
                  : null
        
        return (
            <div className={'article'}>
                <h1 onClick={articleOpen}>{article.title}</h1>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {body}
                </CSSTransitionGroup>
                <button onClick={this.handleDeleteClick.bind(this)}>Delete article</button>
                <CommentList articleId = { article.id } comments = { article.comments }/>
                <Link to={`/articles/${article.id}/comments`}>Open comments</Link>
                {this.props.children}
            </div>
        )  
    }
    
    handleDeleteClick(event) {
        this.props.deleteArticle(this.props.article.id);
    }
}