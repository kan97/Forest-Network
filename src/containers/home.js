import Home from "../components/home/home";
import {
  connect
} from "react-redux";
import { setName, getUserInfo, incUserBal } from "../store/actions/userInfo";
import { getPostTimeline, delPosts } from "../store/actions/post";
import { getFollowing } from "../store/actions/following";
import { getMyFollowing } from "../store/actions/following";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.post.postList,
  followingList: state.followingList.list,
  myFollowingList: state.myFollowingList.list
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getUserInfo: user => dispatch(getUserInfo(user)),
  getPostTimeline: post => dispatch(getPostTimeline(post)),
  getFollowing: list => dispatch(getFollowing(list)),
  delPosts: () => dispatch(delPosts()),
  incUserBal: amount => dispatch(incUserBal(amount)),
  getMyFollowing: list => dispatch(getMyFollowing(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);