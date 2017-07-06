import React, { Component } from 'react';
import _ from 'lodash'
import Article from '../Article/index';
import CommentList from '../CommentList';
import articleOpen from '../../decorators/oneOpen'

import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import 'react-select/dist/react-select.css'
import './index.css'

class ArticleList extends Component {
    constructor() {
        super();      
        this.state = {
            selectedArticles: null,
            day: {
                from: null,
                to: null
            }
        }
    }
    
    handleSelectChange(selectedArticles) {
        this.setState({
            selectedArticles
        })
    }
    
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state.day);
        this.setState({
            day: range
        });
    }
    
    handleResetClick(event) {
        event.preventDefault();
        this.setState({
            day: {
                from: null,
                to: null
            }
        })
    }
    
    render() {      
        if (!this.props.articles) {
            return (
                <div>There is no articles...</div>
            )
        }
        
        let listItems = this.props.articles.map((article) => {          
            return (
                <div key={article.id}>
                    <Article 
                        article = {article} 
                        articleOpen = {this.props.oneOpen(article.id)}
                        openedArticleId = {this.props.openedItemId}
                    />
                </div>
            )
        })
        
        const options = this.props.articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        
        const {from, to} = this.state.day;
        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selectedArticles}
                    multi = {true}
                    onChange = {this.handleSelectChange.bind(this)}
                />
                <a href="#" onClick = {this.handleResetClick.bind(this)}>Reset</a>
                <DayPicker
                    selectedDays = {[from, { from, to }]}
                    onDayClick = {this.handleDayClick.bind(this)}
                    fixedWeeks
                />
                <ul>{listItems}</ul>
            </div>
        )
    } 
}

export default articleOpen(ArticleList)