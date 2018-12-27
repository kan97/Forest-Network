import React, { Component } from "react";
import LoginPre from "../components/login/login";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../store/actions/userInfo";
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
      })
      .catch(err => {
        alert("Private key doesn't exist");
      });
    } catch (error) {
      alert('Invalid private key')
    }
  };

  goToSignUp = () => {
    window.location.href = "/signup";
  }

  render() {
    const user = UTILS.GetCurrentUser();
    if (user) {
      return <Redirect to={"/mypage/"} />
    }
    return (
      <LoginPre
        callbackFromParent={this.myCallback}
        signupFunc={this.goToSignUp}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInfo: user => dispatch(getUserInfo(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
