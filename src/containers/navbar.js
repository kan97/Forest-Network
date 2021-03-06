import React, { Component } from "react";
import NavbarPre from "../components/navbar/navbar";
import UTILS from "../helper/UTILS";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { delUserInfo } from "../store/actions/userInfo";
import { searchUser } from "../store/actions/following";
import { getMyFollowing } from "../store/actions/following";

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
      localStorage.removeItem("secret");
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
        searchUser={this.props.searchUser}
        results={this.props.results}
        myFollowingList={this.props.myFollowingList}
      />
    );
  }
}

const mapStateToProps = state => ({
  results: state.searchUserByKeyword.list,
  myFollowingList: state.myFollowingList.list
});

const mapDispatchToProps = dispatch => ({
  delUserInfo: () => dispatch(delUserInfo()),
  searchUser: list => dispatch(searchUser(list)),
  getMyFollowing: list => dispatch(getMyFollowing(list)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));