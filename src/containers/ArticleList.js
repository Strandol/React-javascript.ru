import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import Article from '../components/Article/';
import CommentList from '../components/CommentList';
import articleOpen from '../decorators/oneOpen'

import { deleteArticle } from '../actions'

class ArticleList extends Component {  
    render() {      
        if (!this.props.articles) {
            return (
                <div>There is no articles...</div>
            )
        }
        
        let listItems = _.filter(this.props.articles, this.isArticleEqaulToSelected.bind(this.props))
        if (this.isRangeDaysBothExists(this.props.day)) {
            listItems = _.filter(listItems, (article) => {
                return this.isArticleCreatedInRangeOfDates(article, this.props.day);
            })
        }
        
        listItems = _.map(listItems, (article) => {          
            return (
                <div key={article.id}>
                    <Article 
                        article = {article} 
                        articleOpen = {this.props.oneOpen(article.id)}
                        openedArticleId = {this.props.openedItemId}
                        deleteArticle = {this.props.deleteArticle}
                    />
                </div>
            )
        })

        return <div><ul>{listItems}</ul></div>
    }
    
    isArticleCreatedInRangeOfDates(article, date) {
        let dateOfCreate = new Date(article.date);
        
        return (!date.from && (dateOfCreate - date.from) === 0) ||
        (!date.to && (dateOfCreate - date.to) === 0) ||
        ((date.from <= dateOfCreate) && (dateOfCreate <= date.to))
    }
    
    isRangeDaysBothExists(days) {
        return !(!days.to && !days.from)
    }
    
    isArticleEqaulToSelected(article) {
        return this.selectedArticles.length ?
            _.find(this.selectedArticles, { label: article.title })
            : true;
    }
}

export default connect((state) => {
    return {
        articles: state.articles.articles.toArray(),
        selectedArticles: state.articles.selectedArticles,
        day: state.filters.day
    }
}, {
    deleteArticle
})(articleOpen(ArticleList))
