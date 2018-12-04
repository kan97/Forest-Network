import React, { Component } from 'react';
import './post.css';

import Comment from '../comment/comment';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandComment: false,
            isLiked: false
        }
    }

    componentDidMount = () => {
        this.setState({
            isLiked: this.props.isLiked
        });
    }

    handleClick = () => {
        this.setState({
            isExpandComment: !this.state.isExpandComment
        });
    }

    handleReact = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    getPostContent = () => {
        let content = [];
        if (this.props.postText) {
            content.push(
                <div className="post-text">
                    {this.props.postText}
                </div>
            );
        }
        if (this.props.postImage) {
            content.push(<img src={this.props.postImage} alt={this.props.postImage} className="post-image" />);
        }

        if (content.length === 0) {
            content.push(<div />)
        }

        return content;
    };

    showCommentText = () => {
        return (
            <div>
                <div className="post-horizal-line" />
                <div className="row post-write-comment">
                    <div className="col-sm-10">
                        <input type="text" class="form-control post-your-comment" id="comment" placeholder="Your comment" />
                    </div>

                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>

        );
    }

    showShareTimes = () => {
        return (
            <div className="col-sm-2 text-left post-react-button">
                <span class="glyphicon glyphicon-send post-react"></span>
                {this.props.postShare}
            </div>
        );
    }

    render() {
        return (
            <div className="container post-container">
                <div className="post-header row">
                    <div className="col-sm-1">
                        <img src={this.props.ownerAvatar} alt={this.props.ownerAvatar} className="post-owner-avatar" />
                    </div>
                    <div className="col-sm-6 post-owner-name">
                        {this.props.ownerName}
                    </div>
                    <div className="col-sm-5 post-time">
                        <span class="glyphicon glyphicon-time post-react"></span>
                        {this.props.postTime}
                    </div>
                </div>
                <div className="post-horizal-line" />
                <div className="post-content">
                    {this.getPostContent()}
                </div>
                <div className="post-horizal-line" />
                <div className="post-footer row">
                    <div className="col-sm-2 text-left post-react-button" onClick={this.handleReact}>
                        {this.state.isLiked ? <span class="glyphicon glyphicon-heart post-react"></span> : <span class="glyphicon glyphicon-heart-empty post-react"></span>}
                        {this.props.postLike}
                    </div>
                    <div className="col-sm-2 text-left post-react-button" onClick={this.handleClick}>
                        <span class="glyphicon glyphicon-align-left post-react"></span>
                        {this.props.postComment}
                    </div>

                    {this.props.isYourPost ? <div className="col-sm-2 text-left post-react-button" /> : this.showShareTimes()}
                    <div className="col-sm-6"></div>
                </div>

                {this.state.isExpandComment ? <div className="post-horizal-line" /> : <div />}
                {this.state.isExpandComment ? getComments() : <div />}
                {this.state.isExpandComment ? this.showCommentText() : <div />}
            </div>
        );
    }
}

export default Post;

const getComments = () => {
    let comments = [];
    comments.push(
        <Comment
            ownerAvatar="https://www.muralswallpaper.com/app/uploads/blue-grunge-ombre-design-square-1-400x400.jpg"
            ownerName="Tiêu Trí Kiệt"
            comment="Good!"
            commentTime="03/12/2018"
        />
    );

    comments.push(
        <Comment
            ownerAvatar="https://www.muralswallpaper.com/app/uploads/Aztec-Diamonds-Pattern-Wallpaper-Mural-Square-400x400.jpg"
            ownerName="Kiệt Tiêu"
            comment="This is perfect comment !?"
            commentTime="02/12/2018"
        />
    );

    comments.push(
        <Comment
            ownerAvatar="http://yatheatre.com/wp-content/uploads/2018/08/Replaceable-The-Office-Wallpaper-Hd-005-art-deco-4876776952521969087-wallsneedlove-.jpg"
            ownerName="Tiêu"
            comment="That right!"
            commentTime="01/12/2018"
        />
    );

    return (
        <div className="row post-comment">
            {comments}
        </div>
    );
}