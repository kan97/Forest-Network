import Home from "../components/home/home";
import {
  connect
} from "react-redux";
import { setName, getUserInfo } from "../store/actions/userInfo";
import { getPostTimeline } from "../store/actions/post";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.post,
  followerList: state.followerList.followerList,
  followingList: state.followingList.followingList
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getUserInfo: user => dispatch(getUserInfo(user)),
  getPostTimeline: post => dispatch(getPostTimeline(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);