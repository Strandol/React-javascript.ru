import React, { Component } from 'react';
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {  
    render() {              
        let {comments, isOpen, onClickHandler} = this.props;
        if (comments) {
            comments = comments.map((comment) => {
                return ( <Comment key={comment.id} content={comment}/> )
            })
        }
            
        return(
            <div>
                <a onClick={onClickHandler}>{isOpen ? 'Close comments' : 'Open comments'}</a>
                {isOpen ? (comments || <p>There is no comments...</p>) : null}
            </div>
        )
    }
}

export default toggleOpen(CommentList)