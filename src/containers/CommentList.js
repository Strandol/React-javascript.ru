import React, { Component } from 'react';
import Comment from '../components/Comment'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'

class CommentList extends Component {  
    render() {              
        let {commentObjects, isOpen, onClickHandler} = this.props;
        commentObjects = commentObjects.map((comment) => {
            return ( <Comment key={comment.id} content={comment}/> )
        })
            
        return(
            <div>
                <a onClick={onClickHandler}>{isOpen ? 'Close comments' : 'Open comments'}</a>
                {isOpen ? (commentObjects.length ? commentObjects : <p>There is no comments...</p>) : null}
            </div>
        )
    }
}

export default connect((state, { comments }) => {
    return {
        commentObjects: comments.map(id => state.comments.get(id))
    }
})(toggleOpen(CommentList))