/**
 * 显示评论列表的组件
 */
import React, { Component } from 'react';
import CommentItem from '../CommentItem/CommentItem';

class CommentList extends Component {
    render() {
        const commentList = this.props.commentList;
        const display = commentList.length === 0 ? 'block' : 'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复</h3>
                <h2 style={{display: display}}> 暂无评论,请添加评论</h2>
                <ul className="list-group">
                    {
                        commentList.map((value, index) => {
                            return (
                                <CommentItem comment={value} key={index} deleteComment={this.props.deleteComment} index={index} />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

CommentList.Properties = {
    commentList: React.PropTypes.array.isRequired
};

export default CommentList