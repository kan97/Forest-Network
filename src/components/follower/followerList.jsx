import React, { Component } from "react";
import "./followerList.css";
import Follower from "./follower";

class FollowerList extends Component {
  getFollowerList = () => {
    if (this.props.list) {
      return this.props.list.map((follower, index) => {
        let isFollowing = false;
        if (this.props.followList && this.props.followList.includes(follower.publicKey)) {
          isFollowing = true;
        }

        return (
          <Follower
            key={index}
            avatar={follower.avatar}
            name={follower.name}
            isFollowing={isFollowing}
            publicKey={follower.publicKey}
            userInfo={this.props.userInfo}
          />
        );
      });
    }
    else {
      return <div className="row">This list is still empty!</div>;
    }
  };

  render() {
    return (
      <div className="container list-follow-container">
        <div className="row list-follow-title">{this.props.title}</div>
        <div className="horizal-line" />
        {this.getFollowerList()}
      </div>
    );
  }
}

export default FollowerList;
