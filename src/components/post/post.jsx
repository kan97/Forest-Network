import React, { Component } from 'react';
import './post.css';

import Comment from '../comment/comment';

class Post extends Component {

    getPostContent = () => {
        if (this.props.postImage) {
            return (
                <img src={this.props.postImage} alt={this.props.postImage} className="post-image" />
            );
        }
        else {
            return (
                <div className="post-text">
                    {this.props.postText}
                </div>
            );
        }
    };

    getComments = () => {
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
                    <div className="col-sm-2 text-left post-react-button">
                        {this.props.isLiked ? <span class="glyphicon glyphicon-heart post-react"></span> : <span class="glyphicon glyphicon-heart-empty post-react"></span>}
                        {this.props.postLike}
                    </div>
                    <div className="col-sm-2 text-left post-react-button">
                        <span class="glyphicon glyphicon-align-left post-react"></span>
                        {this.props.postComment}
                    </div>
                    <div className="col-sm-2 text-left post-react-button">
                        <span class="glyphicon glyphicon-send post-react"></span>
                        {this.props.postShare}
                    </div>
                    <div className="col-sm-6"></div>
                </div>

                {this.props.isTimeline ? <div /> : <div className="post-horizal-line" />}
                {this.props.isTimeline ? <div /> : this.getComments()}
            </div>
        );
    }
}

export default Post;