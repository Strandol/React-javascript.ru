import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'

class ArticleContainer extends Component {    
    render() {
        return (
            <div>
                <Article article = {this.props.article} isOpen = {true}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        article: state.articles.articles.getIn(['entities', props.id])
    }
})(ArticleContainer)