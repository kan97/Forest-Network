import Home from "../components/home/home";
import {
  connect
} from "react-redux";
import { setName, getUserInfo } from "../store/actions/userInfo";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.postList.postList,
  followerList: state.followerList.followerList,
  followingList: state.followingList.followingList
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getUserInfo: user => dispatch(getUserInfo(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);