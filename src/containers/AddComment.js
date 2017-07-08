import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'

class AddComment extends Component {
    render() {
        return(
            <form onSubmit={this.handleAddComment.bind(this)}>
                <input name="nickname" type='text' placeholder='Enter nickname...' required/>
                <input name="text" type='text' placeholder='Enter comment...' required/>
                <input type='submit' value='Add' />
            </form>
        )
    }
    
    handleAddComment(event) {
        event.preventDefault();
        let fields = event.target.elements;
        this.props.addComment(this.props.articleId, {
            user: fields.nickname.value,
            text: fields.text.value
        });
    }
}

export default connect(null, {
    addComment
})(AddComment)