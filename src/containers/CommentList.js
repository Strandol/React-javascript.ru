import React, { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            text: 'Open'
        }
    }
    
    onClickHandler(event) {
        this.setState({
            isOpen: !this.state.isOpen,
            text: this.state.isOpen ? 'Open' : 'Close'
        })
    }
    
    render() {      
        let commentComponents = null;
        
        if (this.state.isOpen) {
            if (!this.props.comments) {
                return(
                    <div>
                        <a onClick={this.onClickHandler.bind(this)}>{this.state.text}</a>
                        <p>There is no comments...</p>
                    </div>
                )
            }
            
            commentComponents = this.props.comments.map((comment) => {
                return ( <Comment key={comment.id} content={comment}/> )
            })
        }
            
        return(
            <div>
                <a onClick={this.onClickHandler.bind(this)}>{this.state.text}</a>
                {commentComponents}
            </div>
        )
    }
}