import React, { Component } from "react";
import "./statusPost.css";
import "./post.css";

class StatusPost extends Component {
  render() {
    return (
      <div className="container post-container">
        <div className="post-header row">
          <div className="col-sm-1">
            <img
              src={this.props.ownerAvatar}
              alt={this.props.ownerAvatar}
              className="post-owner-avatar"
            />
          </div>
          <div className="col-sm-6 post-owner-name">{this.props.fullName}</div>
        </div>
        <div className="post-horizal-line" />
        <div className="row statuspost-text">
          <textarea
            className="form-control"
            rows="3"
            id="share-status"
            placeholder="Share your status now!"
          />
        </div>
        <div className="post-horizal-line" />
        <div className="row statuspost-submit">
          <button type="button" className="btn btn-primary btn-post">
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default StatusPost;
