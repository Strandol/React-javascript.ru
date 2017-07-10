import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { deleteArticle } from '../actions'

class ArticleContainer extends Component {    
    render() {
        return (
            <div>
                <Article deleteArticle = {this.props.deleteArticle} article = {this.props.article} isOpen = {true}/>
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
})(ArticleContainer)