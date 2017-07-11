import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { deleteArticle } from '../actions'
import articleOpen from '../decorators/oneOpen'

class ArticleContainer extends Component {    
    render() {
        return (
            <div>
                <Article
                    articleOpen = {this.props.oneOpen(this.props.article.id)}
                    openedArticleId = {this.props.openedItemId}
                    deleteArticle = {this.props.deleteArticle}
                    article = {this.props.article}
                    isOpen = {true}
                />
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        article: state.articles.articles.getIn(['entities', props.id])
    }
}, {
    deleteArticle
})(articleOpen(ArticleContainer))