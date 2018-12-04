import Home from "../components/home/home";
import {
  connect
} from "react-redux";

const mapStateToProps = state => ({
  postList: state.postList.postList
});

export default connect(
  mapStateToProps
)(Home);