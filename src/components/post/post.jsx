import React, { Component } from 'react';
import './post.css';

class PostTimeLine extends Component {

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
                        {this.props.postTime}
                    </div>
                </div>
                <div className="post-horizal-line" />
                <div className="post-content">
                    {this.getPostContent()}
                </div>
                <div className="post-horizal-line" />
                <div className="post-footer row">
                    <div className="col-sm-2 text-left">
                        {this.props.isLiked ? <span class="glyphicon glyphicon-heart post-react"></span> : <span class="glyphicon glyphicon-heart-empty post-react"></span>}
                        {this.props.postLike}
                    </div>
                    <div className="col-sm-2 text-left">
                        <span class="glyphicon glyphicon-align-left post-react"></span>
                        {this.props.postComment}
                    </div>
                    <div className="col-sm-8"></div>
                </div>
            </div>
        );
    }
}

export default PostTimeLine;