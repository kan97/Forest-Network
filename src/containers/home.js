import Home from "../components/home/home";
import {
  connect
} from "react-redux";
import { setName, getUserInfo, incUserBal } from "../store/actions/userInfo";
import { getPostTimeline, delPosts } from "../store/actions/post";
import { getFollowing } from "../store/actions/following";
import { incCurrUserSeq, setCurrUser } from "../store/actions/currUser";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.post,
  followingList: state.followingList,
  currUser: state.currUser
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getUserInfo: user => dispatch(getUserInfo(user)),
  getPostTimeline: post => dispatch(getPostTimeline(post)),
  getFollowing: list => dispatch(getFollowing(list)),
  delPosts: () => dispatch(delPosts()),
  incCurrUserSeq: () => dispatch(incCurrUserSeq()),
  incUserBal: amount => dispatch(incUserBal(amount)),
  setCurrUser: user => dispatch(setCurrUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);