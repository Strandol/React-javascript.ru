import React, { Component } from 'react';
import { connect } from 'react-redux'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import { OrderedMap } from 'immutable'

import 'react-day-picker/lib/style.css'
import 'react-select/dist/react-select.css'
import './index.css'

import { selectArticles, setDayRange, resetDays } from '../../actions'

class Filters extends Component {
    handleSelectChange(selectedArticles) {
        this.props.selectArticles(selectedArticles)
    }
    
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.props.day);
        this.props.setDayRange(range);
    }
    
    handleResetClick(event) {
        event.preventDefault();
        this.props.resetDays();
    }
    
    getBeatyDate(date) {
        return date ? date.toLocaleString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        }) : '--';
    }
    
    render() {
        const {from, to} = this.props.day;
        const options = this.props.articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        
        return(
            <div>
                <h2>
                    You selected from: {this.getBeatyDate(from)} to: {this.getBeatyDate(to)}
                </h2>
                <Select
                    options = {options.toJS()}
                    value = {this.props.selectedArticles}
                    multi = {true}
                    onChange = {this.handleSelectChange.bind(this)}
                />
                <a href="#" onClick = {this.handleResetClick.bind(this)}>Reset</a>
                <DayPicker
                    selectedDays = {[from, { from, to }]}
                    onDayClick = {this.handleDayClick.bind(this)}
                    fixedWeeks
                />
            </div>
        )
    }
}

export default connect((state) => {
    const { articles: { selectedArticles, articles }} = state;
    return {
        day: state.filters.day,
        articles: articles.get('entities').valueSeq(),
        selectedArticles
    }
}, {
    selectArticles,
    resetDays,
    setDayRange
})(Filters)