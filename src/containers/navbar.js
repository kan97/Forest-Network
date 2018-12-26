import React, { Component } from "react";
import NavbarPre from "../components/navbar/navbar";
import UTILS from "../helper/UTILS";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { delUserInfo } from "../store/actions/userInfo";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  state = {
    isLogout: false
  };

  myCallback = () => {
    UTILS.ParseLogOut().then(() => {
      this.setState({ isLogout: true }, ()=>{
        window.location.href = "/login";
      });
      this.props.delUserInfo()
    });
  };

  myLoginCallback = () => {
    window.location.href = "/login";
  }

  mypageCallback = () => {
    window.location.href = "/mypage";
  }

  render() {
    return (
      <NavbarPre
        pathname={this.props.location.pathname}
        callbackFromParent={this.myCallback}
        loginCallback={this.myLoginCallback}
        mypageCallback={this.mypageCallback}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delUserInfo: secret => dispatch(delUserInfo()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Navbar));