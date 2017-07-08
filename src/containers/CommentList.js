import React, { Component } from 'react';
import Comment from '../components/Comment'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import AddComment from './AddComment'

class CommentList extends Component {  
    render() {              
        let {loading, commentObjects, isOpen, onClickHandler} = this.props;
        
        if (loading) {
            return <h4>Loading...</h4>
        }
        
        commentObjects = commentObjects.map((comment) => {
            return ( comment ? <Comment key={comment.id} content={comment}/> : null)
        })
            
        return(
            <div>
                <a onClick={onClickHandler}>{isOpen ? 'Close comments' : 'Open comments'}</a>
                {isOpen ? (commentObjects.length ? commentObjects : <p>There is no comments...</p>) : null}
                {isOpen ? <AddComment isOpen = {isOpen} articleId = {this.props.articleId}/> : null}
            </div>
        )
    }
}

export default connect((state, { comments }) => {
    return {
        loading: state.comments.get('loading'),
        commentObjects: comments.map(id => state.comments.get(id))
    }
})(toggleOpen(CommentList))