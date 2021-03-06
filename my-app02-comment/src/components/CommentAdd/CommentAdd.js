import React, { Component } from 'react';

class CommentAdd extends Component {
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="userName"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="context"/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment} >提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    /**
     * 调用父组件进行添加评论
     */
    addComment = () => {
        const comment = {
            id: Date.now(),
            name: this.refs.userName.value,
            content: this.refs.context.value,
        };
        this.props.addComment(comment);

        //清空显示框的数据
        this.refs.userName.value = '';
        this.refs.context.value = '';
    };
}

CommentAdd.propTypes = {
    addComment: React.PropTypes.func.isRequired
};

export default CommentAdd
