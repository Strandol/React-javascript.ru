import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Filters from './Filters/'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return(
            <Provider store = {store}>
                <div>
                    <h1>Articles List</h1>
                    <Filters />
                    <ArticleList />
                </div>
            </Provider>
        )
    }
}

export default App