import React, { Component } from "react";
import "./post.css";
import Comment from "../comment/comment";
import moment from "moment";
import axios from "axios";
import UTILS from "../../helper/UTILS";
const { sign, encode } = require("../../lib/tx/index");

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandComment: false,
      isExpandReact: false,
      text: '',
      userInfo: null
    };
  }

  componentDidMount = () => {
    this.setState({
      isLiked: this.props.post.isLiked
    });

    const userInfo = UTILS.GetCurrentUser();
    if (userInfo) {
      this.setState({
        userInfo: userInfo
      });
    }
  };

  handleClick = () => {
    this.setState({
      isExpandComment: !this.state.isExpandComment
    });
  };

  handleReact = reaction => {
    this.setState(
      {
        isExpandReact: !this.state.isExpandReact
      },
      () => {
        if (this.state.isExpandReact) {
        } else {
          // Re-set this post react
          const userInfo = UTILS.GetCurrentUser();
          console.log({ currentUser: this.state.userInfo, reaction });
          if (userInfo) {
            const tx = {
              version: 1,
              sequence: this.state.userInfo.sequence + 1,
              memo: Buffer.alloc(0),
              operation: "interact",
              params: {
                object: this.props.post.hash,
                content: {
                  type: 2,
                  reaction: reaction,
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
            })
          }

        }
      }
    );

  };

  showCommentText = () => {
    return (
      <div>
        <div className="post-horizal-line" />
        <div className="row post-write-comment">
          <div className="col-sm-10">
            <input
              type="text"
              class="form-control post-your-comment"
              id="comment"
              placeholder="Your comment"
              onChange={e => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
          </div>

          <div className="col-sm-2">
            <button type="button" className="btn btn-primary" onClick={() => {
              const text = this.state.text
              const tx = {
                version: 1,
                sequence: this.props.userInfo.sequence + 1,
                memo: Buffer.alloc(0),
                operation: "interact",
                params: {
                  object: this.props.post.hash,
                  content: {
                    type: 1,
                    text: text,
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
                this.setState({ text: '' })
              })
            }}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };

  showShareTimes = () => {
    return (
      <div className="col-sm-2 text-left post-react-button">
        <span class="glyphicon glyphicon-send post-react" />
        {this.props.post.postShare}
      </div>
    );
  };

  getPostReact = () => {
    // Non-react
    if (this.props.post.interact === 0) {
      return <i className="em em-neutral_face post-react-em" />;
    }
    // Like
    else if (this.props.post.interact === 1) {
      return <i className="em em-star-struck post-react-em" />;
    }
    // Love
    else if (this.props.post.interact === 2) {
      return <i className="em em-blush post-react-em" />;
    }
    // Haha
    else if (this.props.post.interact === 3) {
      return <i className="em em-grin post-react-em" />;
    }
    // Wow
    else if (this.props.post.interact === 4) {
      return <i className="em em-astonished post-react-em" />;
    }
    // Sad
    else if (this.props.post.interact === 5) {
      return <i className="em em-anguished post-react-em" />;
    }
    // Angry
    else if (this.props.post.interact === 6) {
      return <i className="em em-angry post-react-em" />;
    }
  };

  showReact = () => {
    if (this.state.isExpandReact) {
      return (
        <div className="post-footer row">
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(0)}
          >
            <i className="em em-neutral_face post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(1)}
          >
            <i className="em em-star-struck post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(2)}
          >
            <i className="em em-blush post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(3)}
          >
            <i className="em em-grin post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(4)}
          >
            <i className="em em-astonished post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(5)}
          >
            <i className="em em-anguished post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={() => this.handleReact(6)}
          >
            <i className="em em-angry post-react-em" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="post-footer row">
          <div
            className="col-sm-2 text-left post-react-button"
            onClick={this.handleReact}
          >
            {this.getPostReact()}
            {this.props.post.postLike}
            <div className='tooltip-containerSS'>
              <div className='tooltipSS'>
                {this.getPostReactorsList()}
              </div>
            </div>
          </div>
          <div
            className="col-sm-2 text-left post-react-button"
            onClick={this.handleClick}
          >
            <i className="em em-left_speech_bubble post-react-em" />
            {this.props.post.postComment}
          </div>
          <div className="col-sm-6" />
        </div>
      );
    }
  };

  getPostReactorsList = () => {
    console.log(this.props.post.reactions);
    let reactors = this.props.post.reactions;
    if (!reactors) {
      return <div></div>;
    }
    reactors = reactors.map((reaction) => {
      console.log(reaction.user.name)
      const reactionJsx = <li>{reaction.user.name}</li>
      return reactionJsx;
    });
    return <div className='tooltiptext'>{reactors}</div>;
  }

  showComments = () => {
    if (this.props.post.comments) {
      const list = this.props.post.comments.map((cmt, idx) => {
        return <Comment
          key={idx}
          ownerAvatar={cmt.user.picture}
          ownerName={cmt.user.name}
          comment={cmt.comment}
          commentTime={moment(cmt.time).fromNow()}
        />
      })

      return <div className="row post-comment">{list}</div>;
    }
    else {
      return <div className="row post-comment">
        Write your first comment!
      </div>;
    }
  }

  handleDirectUser = () => {
    window.location.href = "/userid/" + this.props.post.userId;
  }

  render() {
    const fullName = () => {
      if (this.props.post.isPostTimeline) {
        return (
          <div className="col-sm-7 post-owner-name post-direct">
            {this.props.post.fullName}
          </div>
        );
      }
      else {
        return (
          <div className="col-sm-7 post-owner-name post-direct" onClick={this.handleDirectUser}>
            {this.props.post.fullName}
          </div>
        );
      }
    }

    return (
      <div className="container post-container">
        <div className="post-header row">
          <div className="col-sm-1 post-direct" onClick={this.handleDirectUser}>
            <img
              src={this.props.post.avatar}
              alt={this.props.post.avatar}
              className="post-owner-avatar"
            />
          </div>
          {fullName()}
          <div className="col-sm-4 post-time">
            <span className="glyphicon glyphicon-time post-react" />
            {moment(this.props.post.time).fromNow()}
          </div>
        </div>
        <div className="post-horizal-line" />
        <div className="post-content">
          <div className="post-text">{this.props.post.postText}</div>
        </div>
        <div className="post-horizal-line" />
        {this.showReact()}

        {this.state.isExpandComment ? (
          <div className="post-horizal-line" />
        ) : (
            <div />
          )}
        {this.state.isExpandComment ? this.showComments() : <div />}
        {this.state.isExpandComment ? this.showCommentText() : <div />}
      </div>
    );
  }
}

export default Post;