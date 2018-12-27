import React, { Component } from "react";
import "./follower.css";
import axios from "axios";
import UTILS from "../../helper/UTILS";
const { sign, encode } = require("../../lib/tx/index");
const base32 = require('base32.js');

class Follower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false
    };
  }

  componentDidMount () {
    this.setState({
      isFollowing: this.props.isFollowing
    });
  }

  handleFollowButton = async isFollowing => {
    const currUser = await UTILS.GetLiveCurrentUser()
    if (!currUser) {
      return;
    }
    const followings = currUser.followings
    if (isFollowing) {
      const index = followings.indexOf(this.props.userInfo.username)
      followings.splice(index, 1)
    }
    else {
      followings.push(this.props.userInfo.username)
    }
    const addresses = followings.map(e => 
      Buffer.from(base32.decode(e))
    )

    const tx = {
      version: 1,
      sequence: currUser.sequence + 1,
      memo: Buffer.alloc(0),
      operation: "update_account",
      params: {
        key: "followings",
        value: {
          addresses: addresses
        }
      }
    };
    sign(tx, localStorage.getItem("secret"));
    const etx = encode(tx).toString("base64");
    axios.post("https://komodo.forest.network/", {
      jsonrpc: "2.0",
      id: "dontcare",
      method: "broadcast_tx_commit",
      params: [`${etx}`]
    }).then(() => {
      console.log('success');
      this.setState({
        isFollowing: !isFollowing
      });
    })
  }

  render() {
    return (
      <div className="row follow-container" >
        <div className="col-sm-1" onClick={() => {
          window.location.href = "/user/" + this.props.publicKey;
        }}>
          <img
            className="follow-avatar"
            src={this.props.avatar}
            alt={this.props.avatar}
          />
        </div>
        <div className="col-sm-8 follow-name" onClick={() => {
          window.location.href = "/user/" + this.props.publicKey;
        }}>
          {this.props.name}
        </div>
        <div className="col-sm-3">
          {this.state.isFollowing ? (
            <button type="button" className="btn btn-default follow-button" onClick={()=> {
              this.handleFollowButton(this.state.isFollowing);
            }}>
              Following
            </button>
          ) : (
              <button type="button" className="btn btn-primary follow-button" onClick={()=> {
                this.handleFollowButton(this.state.isFollowing);
              }}>
                Follow
            </button>
            )}
        </div>
      </div>
    );
  }
}

export default Follower;
