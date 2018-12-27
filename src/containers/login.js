import React, { Component } from "react";
import LoginPre from "../components/login/login";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../store/actions/userInfo";
import { setCurrUser } from "../store/actions/currUser";
const { Keypair } = require('stellar-base');

class Login extends Component {
  state = {
    isLogin: false,
  };

  myCallback = key => {
    try {
      UTILS.ParseLogIn(Keypair.fromSecret(key).publicKey())
      .then(result => {
        this.setState({ isLogin: true });
        localStorage.setItem("secret", key);
        const user = UTILS.GetCurrentUser()
        this.props.getUserInfo(user)
        this.props.setCurrUser(user)
      })
      .catch(err => {
        alert("Private key doesn't exist");
      });
    } catch (error) {
      alert('Invalid private key')
    }
  };

  render() {
    const user = UTILS.GetCurrentUser();
    if (user) {
      return <Redirect to={"/mypage/"} />
    }
    return (
      <LoginPre
        callbackFromParent={this.myCallback}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInfo: user => dispatch(getUserInfo(user)),
  setCurrUser: user => dispatch(setCurrUser(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
