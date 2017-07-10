import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Filters from './Filters/'
import { Provider } from 'react-redux'
import { Link } from 'react-router'
import store from '../store'

class App extends Component {
    render() {
        return(
            <Provider store = {store}>                
                <div>          
                    <ul>
                        <li><Link to="/articles">article list</Link></li>
                        <li><Link to="/filters">filters</Link></li>
                    </ul>
                    {this.props.children}  
                </div>
            </Provider>
        )
    }
}

export default App