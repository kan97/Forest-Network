import React, { Component } from "react";
import "./statusPost.css";
import "./post.css";
import axios from "axios";
const { sign, encode } = require("../../lib/tx/index");

class StatusPost extends Component {
  render() {
    return (
      <div className="container post-container">
        <div className="post-header row">
          <div className="col-sm-1">
            <img
              src={this.props.userInfo.avatar}
              alt={this.props.userInfo.avatar}
              className="post-owner-avatar"
            />
          </div>
          <div className="col-sm-6 post-owner-name">
            {this.props.userInfo.fullName}
          </div>
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
          <button
            type="button"
            className="btn btn-primary btn-post"
            onClick={() => {
              const tx = {
                version: 1,
                sequence: this.props.userInfo.sequence + 1,
                memo: Buffer.alloc(0),
                operation: "post",
                params: {
                  keys: [],
                  content: {
                    type: 1,
                    text: document.querySelector("#share-status").value
                  }
                }
              };
              sign(tx, localStorage.getItem("secret"));
              const etx = encode(tx).toString("base64");
              axios
                .post("https://komodo.forest.network/", {
                  jsonrpc: "2.0",
                  id: "dontcare",
                  method: "broadcast_tx_commit",
                  params: [`${etx}`]
                })
                .then(() => {
                  document.querySelector("#share-status").value = "";
                });
            }}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default StatusPost;
