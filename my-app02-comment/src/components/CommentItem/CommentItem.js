import React, { Component } from 'react';

class CommentItem extends Component {
    render() {
        const comment = this.props.comment;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user">
                    <span>{comment.name}</span>
                    <span>说:</span>
                </p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }

    deleteComment = (index)  => {
        this.props.deleteComment(index);
    }
}

CommentItem.propTypes = {
    comment: React.PropTypes.object.isRequired
};

export default CommentItem