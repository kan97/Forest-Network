import Home from "../components/home/home";
import {
  connect
} from "react-redux";
import { setName, getUserInfo } from "../store/actions/userInfo";
import { getPostTimeline, delPosts } from "../store/actions/post";
import { getFollowing } from "../store/actions/following";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.post,
  followingList: state.followingList
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getUserInfo: user => dispatch(getUserInfo(user)),
  getPostTimeline: post => dispatch(getPostTimeline(post)),
  getFollowing: list => dispatch(getFollowing(list)),
  delPosts: () => dispatch(delPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);