import React, { Component } from "react";
import "./comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="container cmt-container">
        <div className="cmt-header row">
          <div className="col-sm-1">
            <img
              className="cmt-owner-avatar"
              src={this.props.ownerAvatar}
              alt={this.props.ownerAvatar}
            />
          </div>
          <div className="col-sm-11 text-left">
            <div className="row">
              <span className="cmt-owner-name">{this.props.ownerName}</span>
              <span className="cmt-time">{this.props.commentTime}</span>
            </div>
            <div className="row cmt-content">{this.props.comment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
