import React, { Component } from "react";
import "./home.css";
import _ from "lodash";
import Modal from "react-responsive-modal";
import Post from "../post/post";
import StatusPost from "../post/statusPost";
import PropTypes from "prop-types";
import FollowerList from "../follower/followerList";
import UpdateAvatar from "../update/updateAvatar";
import { Redirect } from "react-router-dom";
import UTILS from "../../helper/UTILS";
import axios from "axios";
const { sign, encode } = require("../../lib/tx/index");

class Home extends Component {
  state = {
    openFollowers: false,
    openFollowing: false,
    isEditingName: false,
    openAvatarUpdating: false
  };

  onOpenModal = openModal => {
    const newState = _.clone(this.state);
    newState[openModal] = true;
    this.setState(newState);
  };

  onCloseModal = openModal => {
    const newState = _.clone(this.state);
    newState[openModal] = false;
    this.setState(newState);
  };

  editName = () => {
    if (this.state.isEditingName) {
      return (
        <div className="col-sm-12">
          <div className="home-name float-left">
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Input your name"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-follow float-left"
            onClick={this.saveNameOnClick}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-default btn-cancel float-left"
            onClick={this.cancelEditNameOnClick}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <div className="col-sm-12">
          <div className="home-name float-left">
            {this.props.userInfo.fullName}
          </div>
          <button
            type="button"
            className="btn btn-primary btn-follow float-left"
          >
            Follow
          </button>
        </div>
      );
    }
  };

  editNameOnClick = () => {
    const newState = _.clone(this.state);
    newState["isEditingName"] = true;
    this.setState(newState);
  };

  cancelEditNameOnClick = () => {
    const newState = _.clone(this.state);
    newState["isEditingName"] = false;
    this.setState(newState);
  };

  saveNameOnClick = () => {
    const name = document.querySelector("#fullName").value
    const tx = {
      version: 1,
      sequence: this.props.userInfo.sequence + 1,
      memo: Buffer.alloc(0),
      operation: "update_account",
      params: {
        key: "name",
        value: Buffer.from(name, "utf-8")
      }
    };
    sign(tx, this.props.userInfo.secret);
    const etx = encode(tx).toString("base64");
    axios.post("https://komodo.forest.network/", {
      jsonrpc: "2.0",
      id: "dontcare",
      method: "broadcast_tx_commit",
      params: [`${etx}`]
    }).then(() => {
      this.props.setName(name)
    })

    const newState = _.clone(this.state);
    newState["isEditingName"] = false;
    this.setState(newState);
  };

  showEditButtons = () => {
    if (this.state.isEditingName) {
      return <div className="row" />;
    } else {
      return (
        <div className="row">
          <div className="col-sm-12">
            <button
              type="button"
              className="btn btn-default btn-edit float-left"
              onClick={this.editNameOnClick}
            >
              Edit name
            </button>
            <button
              type="button"
              className="btn btn-default btn-edit btn-edit-avat float-left"
              onClick={() => {
                this.onOpenModal("openAvatarUpdating");
              }}
            >
              Edit avatar
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    if (!UTILS.GetCurrentUser()) {
      return <Redirect to="/login" />;
    }
    const modalFollowers = (
      <Modal
        center={true}
        onClose={() => {
          this.onCloseModal("openFollowers");
        }}
        open={this.state.openFollowers}
        styles={followStyles}
        showCloseIcon={false}
      >
        <FollowerList title="Followers" list={this.props.followerList} />
      </Modal>
    );

    const modalFollowing = (
      <Modal
        center={true}
        onClose={() => {
          this.onCloseModal("openFollowing");
        }}
        open={this.state.openFollowing}
        styles={followStyles}
        showCloseIcon={false}
      >
        <FollowerList title="Following" list={this.props.followingList} />
      </Modal>
    );

    const modalAvatarUpdating = (
      <Modal
        center={true}
        onClose={() => {
          this.onCloseModal("openAvatarUpdating");
        }}
        open={this.state.openAvatarUpdating}
        styles={followStyles}
        showCloseIcon={false}
      >
        <UpdateAvatar
          avatar={this.props.userInfo.avatar}
          secret={this.props.userInfo.secret}
          callbackFromParent={() => {
            this.onCloseModal("openAvatarUpdating");
          }}
        />
      </Modal>
    );

    return (
      <div
        className="container"
        style={{
          minHeight: "100vh",
          borderBottom: "",
          width: "100vw",
          backgroundColor: "#fafafa",
          alignItems: "center"
        }}
      >
        <div
          className="center-margin"
          style={{ width: "970px", height: "100%" }}
        >
          <div className="row row-full">
            <div style={{ height: "80px" }} />
          </div>
          <div className="row row-full bottom-line">
            <div className="col-sm-4 center-center" style={{ height: "400px" }}>
              <div style={{ width: "60%", height: "auto" }}>
                <img
                  className="avatar rounded fit-content"
                  src={this.props.userInfo.avatar}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="col-sm-8 align-left" style={{ height: "100%" }}>
              <div className="row" style={{ marginTop: "90px" }} />
              <div className="row spacing-top">{this.editName()}</div>
              <div
                className={this.state.isEditingName ? "row hidden-area" : "row"}
              >
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-default btn-edit float-left"
                    onClick={this.editNameOnClick}
                  >
                    Edit name
                  </button>
                  <button
                    type="button"
                    className="btn btn-default btn-edit btn-edit-avat float-left"
                    onClick={() => {
                      this.onOpenModal("openAvatarUpdating");
                    }}
                  >
                    Edit avatar
                  </button>
                </div>
              </div>
              <div className="row align-left spacing-top">
                <div className="col-sm-3">
                  <span className="home-number">
                    {this.props.userInfo.post}
                  </span>
                  <span>Post</span>
                </div>

                <div
                  className="col-sm-3 clickable-div"
                  onClick={() => {
                    this.onOpenModal("openFollowing");
                  }}
                >
                  <span className="home-number">
                    {this.props.userInfo.following}
                  </span>
                  <span>following</span>
                </div>
                <div className="col-sm-3" />
              </div>
              <div className="row align-left spacing-top">
                <div className="col-sm-12">
                  <span>{this.props.userInfo.bio}</span>
                </div>
              </div>
            </div>
          </div>

          <StatusPost
            ownerAvatar={this.props.userInfo.avatar}
            fullName={this.props.userInfo.fullName}
          />

          {this.props.postList.map((post, index) => (
            <Post key={index} post={post} />
          ))}

          {modalFollowers}
          {modalFollowing}
          {modalAvatarUpdating}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  userInfo: PropTypes.object,
  postList: PropTypes.array,
  followerList: PropTypes.array,
  followingList: PropTypes.array,
  setName: PropTypes.func
};
const followStyles = {
  modal: {
    maxWidth: "none",
    padding: "unset",
    background: "none",
    boxShadow: "none"
  }
};
export default Home;
