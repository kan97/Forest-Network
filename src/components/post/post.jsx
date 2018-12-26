import React, { Component } from "react";
import "./post.css";
import Comment from "../comment/comment";
import moment from "moment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandComment: false,
      isExpandReact: false
    };
  }

  componentDidMount = () => {
    this.setState({
      isLiked: this.props.post.isLiked
    });
  };

  handleClick = () => {
    this.setState({
      isExpandComment: !this.state.isExpandComment
    });
  };

  handleReact = () => {
    this.setState(
      {
        isExpandReact: !this.state.isExpandReact
      },
      () => {
        if (this.state.isExpandReact) {
        } else {
          // Re-set this post react
        }
      }
    );
  };

  getPostContent = () => {
    let content = [];
    if (this.props.post.postText) {
      content.push(<div className="post-text">{this.props.post.postText}</div>);
    }
    if (this.props.post.postImage) {
      content.push(
        <img
          src={this.props.post.postImage}
          alt={this.props.post.postImage}
          className="post-image"
        />
      );
    }

    if (content.length === 0) {
      content.push(<div />);
    }

    return content;
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
            />
          </div>

          <div className="col-sm-2">
            <button type="button" className="btn btn-primary">
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
      return <i class="em em-neutral_face post-react-em" />;
    }
    // Like
    else if (this.props.post.interact === 1) {
      return <i class="em em-star-struck post-react-em" />;
    }
    // Love
    else if (this.props.post.interact === 2) {
      return <i class="em em-blush post-react-em" />;
    }
    // Haha
    else if (this.props.post.interact === 3) {
      return <i class="em em-grin post-react-em" />;
    }
    // Wow
    else if (this.props.post.interact === 4) {
      return <i class="em em-astonished post-react-em" />;
    }
    // Sad
    else if (this.props.post.interact === 5) {
      return <i class="em em-anguished post-react-em" />;
    }
    // Angry
    else if (this.props.post.interact === 6) {
      return <i class="em em-angry post-react-em" />;
    }
  };

  showReact = () => {
    if (this.state.isExpandReact) {
      return (
        <div className="post-footer row">
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-neutral_face post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-star-struck post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-blush post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-grin post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-astonished post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-anguished post-react-em" />
          </div>
          <div
            className="col-sm-2 text-left post-react-button post-react-selection"
            onClick={this.handleReact}
          >
            <i class="em em-angry post-react-em" />
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
          </div>
          <div
            className="col-sm-2 text-left post-react-button"
            onClick={this.handleClick}
          >
            <i class="em em-left_speech_bubble post-react-em" />
            {this.props.post.postComment}
          </div>
          <div className="col-sm-6" />
        </div>
      );
    }
  };

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

  render() {
    return (
      <div className="container post-container">
        <div className="post-header row">
          <div className="col-sm-1">
            <img
              src={this.props.ownerAvatar}
              alt={this.props.ownerAvatar}
              className="post-owner-avatar"
            />
          </div>
          <div className="col-sm-7 post-owner-name">
            {this.props.ownerName}
          </div>
          <div className="col-sm-4 post-time">
            <span className="glyphicon glyphicon-time post-react" />
            {moment(this.props.post.time).fromNow()}
          </div>
        </div>
        <div className="post-horizal-line" />
        <div className="post-content">{this.getPostContent()}</div>
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