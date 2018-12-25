import React, { Component } from "react";
import NavbarPre from "../components/navbar/navbar";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class Navbar extends Component {
  state = {
    isLogout: false
  };

  myCallback = () => {
    UTILS.ParseLogOut().then(() => {
      this.setState({ isLogout: true });
    });
  };

  render() {
    if (this.state.isLogout || !UTILS.GetCurrentUser()) {
      return <Redirect to="/login" />;
    }
    return (
      <NavbarPre
        pathname={this.props.location.pathname}
        callbackFromParent={this.myCallback}
      />
    );
  }
}

export default withRouter(Navbar);