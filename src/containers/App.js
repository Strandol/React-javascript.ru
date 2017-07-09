import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Filters from './Filters/'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return(
            <Provider store = {store}>
                <div>{this.props.children}</div>
            </Provider>
        )
    }
}

export default App