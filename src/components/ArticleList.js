import React, { Component } from 'react'
import { Link } from 'react-router'

class ArticleList extends Component {
    render() {
        const { articles } = this.props;
        
        const listItems = articles.map((article) => {
            return (
                <li key = {article.id}>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </li>
            )
        })
        
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default ArticleList