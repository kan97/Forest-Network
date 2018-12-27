import React, { Component } from "react";
import "./home.css";
import _ from "lodash";
import Modal from "react-responsive-modal";
import Post from "../post/post";
import StatusPost from "../post/statusPost";
import PropTypes from "prop-types";
import FollowerList from "../follower/followerList";
import UpdateAvatar from "../update/updateAvatar";
import Transfer from "../transaction/transfer";
import { Redirect } from "react-router-dom";
import UTILS from "../../helper/UTILS";
import axios from "axios";
import { calculateEnergy } from "../../helper/calculateEnergy";
const { sign, encode } = require("../../lib/tx/index");
const base32 = require('base32.js');

class Home extends Component {
  state = {
    openFollowers: false,
    openFollowing: false,
    isEditingName: false,
    openAvatarUpdating: false,
    hasUserKey: false,
    isFollowing: false,
    openTransfer: false
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
          {this.showFollowButton()}
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
    sign(tx, localStorage.getItem("secret"));
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
    const user = UTILS.GetCurrentUser();
    if (user && user.username === this.props.userInfo.username) {
      return (
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

            <button
              type="button"
              className="btn btn-default btn-edit btn-edit-avat float-left"
              onClick={()=>{
                window.location.href = "/signup";
              }}
            >
              Create account
            </button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div />
      );
    }
  };

  showFollowButton = () => {
    const user = UTILS.GetCurrentUser();
    if (!user || user.username === this.props.userInfo.username) {
      return (
        <div className="home-name float-left">
          {this.props.userInfo.fullName}
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="home-name float-left">
            {this.props.userInfo.fullName}
          </div>
          <button
            type="button"
            className={this.state.isFollowing ? "btn btn-default btn-follow float-left" : "btn btn-primary btn-follow float-left"}
            onClick={() => this.handleFollowButton(this.state.isFollowing)}
          >
            {this.state.isFollowing ? "Following" : "Follow"}
          </button>

          <button
            type="button"
            className={"btn btn-warning btn-follow float-left"}
            style={{marginLeft:"8px"}}
            onClick={() => {
              this.onOpenModal("openTransfer");
            }}
          >
            Transfer
          </button>
        </div>
      );
    }
  }

  handleFollowButton = async isFollowing => {
    const currUser = await UTILS.GetLiveCurrentUser()
    if (!currUser) {
      return <Redirect to="/login" />;
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
      
    })
  }

  showWriteAPost = () => {
    const user = UTILS.GetCurrentUser();
    if (user && user.username === this.props.userInfo.username) {
      return (
        <StatusPost userInfo={this.props.userInfo} />
      );
    }
    else {
      return (
        <div />
      );
    }
  }

  getPosts = (userKey) => {
    if (userKey) {
      const params = userKey === "currentUser" ? null : {
        "userId": userKey
      }

      console.log(params);
      UTILS.callAPI("getPostsTimeline", params).then((res) => {
        console.log("Posts: ", res);
        this.props.getPostTimeline(res);
      }).catch((err) => {
        console.log("Get posts timeline error by: ", err);
      });
    }
    else {

    }
  }

  getFollowingList = (userId) => {
    if (userId) {
      const params = userId === "currentUser" ? null : {
        "userId": userId
      }

      UTILS.callAPI("getFollowingList", params).then((res) => {
        console.log("Following list: ", res);
        this.props.getFollowing(res);
      }).catch((err) => {
        console.log("Error when getfollowing: ", err)
      });
    }
  }

  componentDidMount() {
    this.props.delPosts();
    this.props.setCurrUser(UTILS.GetCurrentUser())
    if (this.props.userId || this.props.userKey) {
      const params = {
        "publicKey": this.props.userKey,
        "userId": this.props.userId
      }
      UTILS.callAPI("getUser", params).then((res) => {
        console.log({ res });
        this.props.getUserInfo(res);
        this.getPosts(res.objectId);
        this.getFollowingList(res.objectId);

        const user = UTILS.GetCurrentUser();
        if (user && user.followings) {
          if (user.followings.includes(res.username)) {
            const newState = _.clone(this.state);
            newState["isFollowing"] = true;
            this.setState(newState);
          }
        }

        return;
      }).catch((err) => {
        console.log("Error when visit user [", this.props.userKey, "] is: ", err);
        window.location.href = "/login";
      });
    }
    else {
      const user = UTILS.GetCurrentUser();
      console.log({ user });

      if (!user) {
        window.location.href = "/login";
        return
      }
      else {
        UTILS.callAPI("getUser", { "publicKey": user.username }).then((res) => {
          console.log({ res });
          this.props.getUserInfo(res);
          this.getPosts(res.objectId);
          this.getFollowingList(res.objectId);
  
          return;
        }).catch((err) => {
          console.log("Error when fetch mypage is: ", err);
          window.location.href = "/login";
        });
      }
    }
  }

  render() {
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
        <FollowerList title="Following" list={this.props.followingList} followList={this.props.userInfo.followings} />
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
          userInfo={this.props.userInfo}
          callbackFromParent={() => {
            this.onCloseModal("openAvatarUpdating");
          }}
        />
      </Modal>
    );

    const showPosts = () => {
      if (this.props.postList && this.props.postList.postList) {
        const list = this.props.postList.postList.map((post, index) => {
          return <Post
            key={index}
            post={post}
            userInfo={this.props.userInfo}
          />
        });
        return list;

      }
      else {
        return (
          <div className="row center-center bold-text spacing-top">
            No post recently!
          </div>
        );
      }
    }

    const modalTransfer = (
      <Modal
        center={true}
        onClose={() => {
          this.onCloseModal("openTransfer");
        }}
        open={this.state.openTransfer}
        styles={followStyles}
        showCloseIcon={false}
      >
        <Transfer 
        userInfo={this.props.userInfo} 
        currUser={this.props.currUser}
        incCurrUserSeq={this.props.incCurrUserSeq}
        incUserBal={this.props.incUserBal}
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
                  className="avatar rounded user-avatar"
                  src={this.props.userInfo.avatar}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="col-sm-8 align-left" style={{ height: "100%" }}>
              <div className="row" style={{ marginTop: "90px" }} />
              <div className="row spacing-top">{this.editName()}</div>
              {this.showEditButtons()}
              <div className="row align-left spacing-top">
                <div className="col-sm-3">
                  <span className="home-number">
                    {this.props.userInfo.post}
                  </span>
                  <span>posts</span>
                </div>

                <div
                  className="col-sm-3 clickable-div"
                  onClick={this.props.userInfo.following > 0 ? () => {
                    this.onOpenModal("openFollowing");
                  } : () => { return null }}
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
                  <div className="row align-left">
                    <div className="col-sm-2 bold-text">
                      Public key
                  </div>
                    <div className="col-sm-10">
                      : {this.props.userInfo.username}
                    </div>
                  </div>
                  <div className="row align-left">
                    <div className="col-sm-2 bold-text">
                      Sequence
                  </div>
                    <div className="col-sm-10">
                      : {this.props.userInfo.sequence}
                    </div>
                  </div>
                  <div className="row align-left">
                    <div className="col-sm-2 bold-text">
                      Balance
                  </div>
                    <div className="col-sm-10">
                      : {this.props.userInfo.balance} CEL
                    </div>
                  </div>
                  <div className="row align-left">
                    <div className="col-sm-2 bold-text">
                      Energy
                  </div>
                    <div className="col-sm-10">
                      : {calculateEnergy(this.props.userInfo)} OXY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.showWriteAPost()}

          {showPosts()}

          {modalFollowing}
          {modalAvatarUpdating}
          {modalTransfer}
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
  setName: PropTypes.func,
  getUserInfo: PropTypes.func.isRequired,
  getPostTimeline: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  delPosts: PropTypes.func
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
