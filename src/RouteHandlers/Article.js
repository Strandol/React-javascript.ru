import React, { Component } from 'react'
import ArticleContainer from '../containers/Article'

export default class ArticleHandler extends Component {    
    render() {
        return <ArticleContainer id = {this.props.params.id} />
    }
}