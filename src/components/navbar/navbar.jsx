import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import UTILS from "../../helper/UTILS";
import Modal from "react-responsive-modal";
import _ from "lodash";
import FollowerList from "../follower/followerList";
import PropTypes from "prop-types";

class Navbar extends Component {

  state = {
    openModalResults: false
  }
  
  showButtonOnNavi = () => {
    const user = UTILS.GetCurrentUser();
    if (!user && !this.props.pathname.includes("login")) {
      return (
        <button
          type="button"
          className="btn btn-primary right-button"
          onClick={() => {
            this.props.loginCallback();
          }}
        >
          Log In
        </button>
      );
    }
    else {
      if (!this.props.pathname.includes("login")) {
        return (
          <span>
            <button
              type="button"
              className="btn btn-default right-button no-border"
              style={{ marginLeft: "8px" }}
              onClick={() => {
                this.props.callbackFromParent();
              }}
            >
              Log Out
          </button>
          <Link to="/mypage" >
            <button
              type="button"
              className="btn btn-primary right-button"
              onClick={() => {
                
              }}
            >
              Me
            </button>
          </Link>
          </span>
        );
      }
      else {
        return null;
      }
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const keyword = document.querySelector("#searchUser").value;
    console.log({keyword});

    if (keyword && keyword.length > 0) {
      const params = {
        "keyword": keyword
      }
  
      await UTILS.callAPI("searchUserByKeyword", params).then((res)=>{
        console.log({res});
        this.props.searchUser(res);
      }).catch((err)=>{
        console.log("Error when search keyword ", keyword, " is: ", err);
      });

      console.log("Reuslt: ", this.props.results);

      if (this.props.results) {
        this.onOpenModal("openModalResults");
      } 
    }
  }



  onOpenModal = openModal => {
    const newState = _.clone(this.state);
    newState[openModal] = true;
    this.setState(newState);
  };

  onCloseModal = openModal => {
    const newState = _.clone(this.state);
    newState[openModal] = false;
    this.setState(newState);
  };

  render() {
    const modalResults = (
      <Modal
        center={true}
        onClose={() => {
          this.onCloseModal("openModalResults");
        }}
        open={this.state.openModalResults}
        styles={modalStyles}
        showCloseIcon={false}
      >
        <FollowerList title={"Results"} list={this.props.results} />
      </Modal>
    );

    return (
      <div
        className="container-fluid bottom-line"
        style={{
          height: "76px",
          borderBottom: "",
          width: "100vw",
          backgroundColor: "#fff",
          alignItems: "center",
          position: "fixed",
          top: "0",
          zIndex: "1"
        }}
      >
        <div
          className="center-margin"
          style={{
            maxWidth: "1600px",
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="row" style={{ width: "970px" }}>
            <div className="col-sm-4">
              <div style={{ maxWidth: "75%" }}>
                <Link to="/">
                  <img
                    className="fit-content"
                    src="/img/title.png"
                    alt="Forest Network"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search 🔎"
                  id="searchUser"
                />
              </form>
            </div>
            <div className="col-sm-4">
              {this.showButtonOnNavi()}
            </div>
          </div>
        </div>

        {modalResults}
      </div>
    );
  }
}



const modalStyles = {
  modal: {
    maxWidth: "none",
    padding: "unset",
    background: "none",
    boxShadow: "none"
  }
};

Navbar.propTypes = {
  results: PropTypes.array,  
  searchUser: PropTypes.func.isRequired
};

export default Navbar;