import React, { Component } from "react";
import "./updateObject.css";
import axios from "axios";
import UTILS from "../../helper/UTILS";
import {
  connect
} from "react-redux";
import { setPicture } from "../../store/actions/userInfo";
const { sign, encode } = require("../../lib/tx/index");

class UpdateAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarFile: null,
      isChooseNewAvatar: false
    };
    this.handleBrowse = this.handleBrowse.bind(this);
  }

  componentDidMount() {
    this.setState({
      avatarFile: this.props.userInfo.avatar
    });
  }

  handleBrowse = async e => {
    if (e.target && e.target.files && e.target.files[0]) {
      let file64 = await getBase64(e.target.files[0]);

      if (file64) {
        this.setState({
          avatarFile: file64,
          isChooseNewAvatar: true
        });
      }
    }
  };

  showSaveButton = () => {
    if (this.state.isChooseNewAvatar) {
      return (
        <button
          type="button"
          className="btn btn-primary save-button"
          onClick={() => {
            const tx = {
              version: 1,
              sequence: this.props.userInfo.sequence + 1,
              memo: Buffer.alloc(0),
              operation: "update_account",
              params: {
                key: "picture",
                value: Buffer.from(this.state.avatarFile.substr(22), "base64")
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
              this.props.setPicture(this.state.avatarFile);
              this.props.callbackFromParent();
            });
          }}
        >
          Update
        </button>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className="container update-container">
        <div className="row update-header">Update your avatar</div>
        <div className="horizal-line" />
        <div className="row update-avatar">
          <img
            src={this.state.avatarFile}
            alt="my-avatar"
            className="my-avatar"
          />
        </div>
        <div className="horizal-line" />
        <div className="row update-button">
          <div className="row">
            <label className="btn btn-default">
              Choose an avatar
              <input
                type="file"
                accept="image/*"
                onChange={this.handleBrowse}
              />
            </label>
          </div>
          {this.showSaveButton()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPicture: picture => dispatch(setPicture(picture)),
});

export default connect(
  null,
  mapDispatchToProps
)(UpdateAvatar);

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
