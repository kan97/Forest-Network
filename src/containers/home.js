import Home from "../components/home/home";
import {
  connect
} from "react-redux";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  postList: state.postList.postList,
  followerList: state.followerList.followerList,
  followingList: state.followingList.followingList
});

export default connect(
  mapStateToProps
)(Home);