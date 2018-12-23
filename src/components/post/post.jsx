import React, { Component } from 'react';
import './post.css';

import Comment from '../comment/comment';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandComment: false,
            isExpandReact: false
        }
    }

    componentDidMount = () => {
        this.setState({
            isLiked: this.props.post.isLiked
        });
    }

    handleClick = () => {
        this.setState({
            isExpandComment: !this.state.isExpandComment
        });
    }

    handleReact = () => {
        this.setState({
            isExpandReact: !this.state.isExpandReact
        }, () => {
            if (this.state.isExpandReact) {

            }
            else {
                // Re-set this post react
            }
        });
    }

    getPostContent = () => {
        let content = [];
        if (this.props.post.postText) {
            content.push(
                <div className="post-text">
                    {this.props.post.postText}
                </div>
            );
        }
        if (this.props.post.postImage) {
            content.push(<img src={this.props.post.postImage} alt={this.props.post.postImage} className="post-image" />);
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
                {this.props.post.postShare}
            </div>
        );
    }

    getPostReact = () => {
        // Non-react
        if (this.props.post.interact === 0) {
            return (<i class="em em-neutral_face post-react-em"></i>);
        }
        // Like
        else if (this.props.post.interact === 1) {
            return (<i class="em em-star-struck post-react-em"></i>);
        }
        // Love
        else if (this.props.post.interact === 2) {
            return (<i class="em em-blush post-react-em"></i>);
        }
        // Haha
        else if (this.props.post.interact === 3) {
            return (<i class="em em-grin post-react-em"></i>);
        }
        // Wow
        else if (this.props.post.interact === 4) {
            return (<i class="em em-astonished post-react-em"></i>);
        }
        // Sad
        else if (this.props.post.interact === 5) {
            return (<i class="em em-anguished post-react-em"></i>);
        }
        // Angry
        else if (this.props.post.interact === 6) {
            return (<i class="em em-angry post-react-em"></i>);
        }
    }

    showReact = () => {
        if (this.state.isExpandReact) {
            return (
                <div className="post-footer row">
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-neutral_face post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-star-struck post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-blush post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-grin post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-astonished post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-anguished post-react-em"></i>
                    </div>
                    <div className="col-sm-2 text-left post-react-button post-react-selection" onClick={this.handleReact}>
                        <i class="em em-angry post-react-em"></i>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="post-footer row">
                    <div className="col-sm-2 text-left post-react-button" onClick={this.handleReact}>
                        {this.getPostReact()}
                        {this.props.post.postLike}
                    </div>
                    <div className="col-sm-2 text-left post-react-button" onClick={this.handleClick}>
                        <i class="em em-left_speech_bubble post-react-em"></i>
                        {this.props.post.postComment}
                    </div>

                    {/* {this.props.post.isYourPost ? <div className="col-sm-2 text-left post-react-button" /> : this.showShareTimes()} */}
                    <div className="col-sm-6"></div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container post-container">
                <div className="post-header row">
                    <div className="col-sm-1">
                        <img src={this.props.post.ownerAvatar} alt={this.props.post.ownerAvatar} className="post-owner-avatar" />
                    </div>
                    <div className="col-sm-6 post-owner-name">
                        {this.props.post.ownerName}
                    </div>
                    <div className="col-sm-5 post-time">
                        <span className="glyphicon glyphicon-time post-react"></span>
                        {this.props.post.postTime}
                    </div>
                </div>
                <div className="post-horizal-line" />
                <div className="post-content">
                    {this.getPostContent()}
                </div>
                <div className="post-horizal-line" />
                {this.showReact()}

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