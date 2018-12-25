import React, { Component } from "react";
import "./updateObject.css";

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
      avatarFile: this.props.avatar
    });
  }

  handleBrowse = async e => {
    if (e.target && e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
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
        <button type="button" className="btn btn-primary save-button">
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

export default UpdateAvatar;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
