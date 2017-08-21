import React, { Component } from 'react';
import CommentAdd from '../CommentAdd/CommentAdd';
import CommentList from '../CommentList/CommentList';

/**
 * 评论主组件
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
        };
    }
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="row">
                            <h2 style={{textAlign: 'center'}}>请发表对React的评论</h2>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList commentList={this.state.commentList} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }

    /**
     * 添加评论信息
     *
     * @param comment
     */
    addComment = (comment) => {
        let commentList = this.state.commentList;
        commentList.unshift(comment);
        this.setState({
            commentList: commentList
        });
    };

    /**
     * 删除指定的元素
     *
     * @param index
     */
    deleteComment = (index) => {
        let commentList = this.state.commentList;
        commentList.splice(index, 1);
        this.setState({
            commentList: commentList,
        });
    }
}

//默认暴露
export default App