import {connect} from "react-redux";
import Explore from "../components/home/explore";
import { getUserInfo } from "../store/actions/userInfo";
import { getPostExplore, delPosts } from "../store/actions/post";

const mapStateToProps = state => ({
    userInfo: state.userInfo,
    postList: state.post.postList
  });
  
  const mapDispatchToProps = dispatch => ({
    getUserInfo: user => dispatch(getUserInfo(user)),
    getPostExplore: post => dispatch(getPostExplore(post)),
    delPosts: () => dispatch(delPosts())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Explore);