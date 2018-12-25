import React, { Component } from "react";
import NavbarPre from "../components/navbar/navbar";
import UTILS from "../helper/UTILS";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { delUserInfo } from "../store/actions/userInfo";

class Navbar extends Component {
  state = {
    isLogout: false
  };

  myCallback = () => {
    UTILS.ParseLogOut().then(() => {
      this.setState({ isLogout: true });
      this.props.delUserInfo()
    });
  };

  render() {
    return (
      <NavbarPre
        pathname={this.props.location.pathname}
        callbackFromParent={this.myCallback}
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