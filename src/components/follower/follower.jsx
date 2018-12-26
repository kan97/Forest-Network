import React, { Component } from "react";
import "./follower.css";

class Follower extends Component {
  render() {
    return (
      <div className="row follow-container" onClick={()=>{
        window.location.href = "/user/" + this.props.publicKey;
      }}>
        <div className="col-sm-1">
          <img
            className="follow-avatar"
            src={this.props.avatar}
            alt={this.props.avatar}
          />
        </div>
        <div className="col-sm-8 follow-name">{this.props.name}</div>
        <div className="col-sm-3">
          {this.props.isFollowing ? (
            <button type="button" className="btn btn-default follow-button">
              Following
            </button>
          ) : (
            <button type="button" className="btn btn-primary follow-button">
              Follow
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Follower;
