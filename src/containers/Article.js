import React, { Component } from 'react'

export default class Article extends Component {    
    render() {
        const { article, articleOpen, openedArticleId} = this.props;
        const body = article.id === openedArticleId
                  ? <section>{article.text}</section>
                  : null
        
        return (
            <div>
                <h1 onClick={articleOpen}>{article.title}</h1>
                {body}
            </div>
        )  
    }
}