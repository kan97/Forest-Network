import React, { Component } from "react";
import "./userInfo.css";
import axios from "axios";
const { sign, encode } = require("../../lib/tx/index");

class Profile extends Component {
  render() {
    return (
      <div className="container info-container">
        <div className="row info-form">
          <div className="col-sm-3">
            <img
              className="info-avatar"
              src={this.props.userAvatar}
              alt={this.props.userAvatar}
            />
          </div>
          <div className="col-sm-9">
            {/* <button type="button" class="btn btn-default info-choose">Choose avatar</button> */}
            <input type="file" class="btn btn-default info-choose" />
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Name</div>
          <div className="col-sm-9">
            <input type="text" class="form-control" id="name" />
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Gender</div>
          <div className="col-sm-9">
            <select class="form-control" id="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Email</div>
          <div className="col-sm-9">
            <input type="email" class="form-control" id="email" />
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Phone number</div>
          <div className="col-sm-9">
            <input type="text" class="form-control" id="phone" />
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Address</div>
          <div className="col-sm-9">
            <input type="text" class="form-control" id="address" />
          </div>
        </div>

        <div className="row info-form">
          <div className="col-sm-3 info-label">Bio</div>
          <div className="col-sm-9">
            <textarea class="form-control" rows="5" id="bio" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-9">
            <button
              type="button"
              className="btn btn-primary info-button"
              onClick={() => {
                const file = document.querySelector("input[type=file]")
                  .files[0];
                const privateKey = document.querySelector("#address").value;
                let picture = new FileReader();
                picture.readAsDataURL(file);
                picture.addEventListener(
                  "load",
                  function() {
                    const tx = {
                      version: 1,
                      sequence: 17,
                      memo: Buffer.alloc(0),
                      operation: "update_account",
                      params: {
                        key: "picture",
                        value: Buffer.from(picture.result.substr(22), "base64")
                      }
                    };
                    sign(tx, privateKey);
                    const etx = encode(tx).toString("base64");
                    axios.post("https://komodo.forest.network/", {
                      jsonrpc: "2.0",
                      id: "dontcare",
                      method: "broadcast_tx_commit",
                      params: [`${etx}`]
                    });
                  },
                  false
                );
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-defaul info-button no-border"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
