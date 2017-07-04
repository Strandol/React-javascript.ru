import React, { Component } from 'react';

export default class CommentList extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.content.title || ''}</h2>
                <h3>{this.props.content.user || 'anonymously'}</h3>
                <p>{this.props.content.text}</p>
            </div>
        )
    }
}