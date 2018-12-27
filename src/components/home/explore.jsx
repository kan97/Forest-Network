import React, { Component } from 'react';
import './home.css';
import './explore.css';

import PropTypes from "prop-types";
import UTILS from "../../helper/UTILS";
import Post from "../post/post";

class Explore extends Component {

    getPosts = () => {
        if (this.props.postList && this.props.postList.length > 0) {
            return this.props.postList.map((post, index)=>{
                return <Post 
                    key={index}
                    post={post}
                />
            })
        }
        else {
            return (
                <div className="row text-16 text-bold ex-nopost">
                    No posts currently!
                </div>
            );
        }
    }

    componentDidMount() {
        this.props.delPosts();
        const params = {
            "page": 1,
            "perPage": 20
        }

        UTILS.callAPI("getPostsExplore", params).then((res)=>{
            console.log("Posts in explore: ", res);
            this.props.getPostExplore(res);
        }).catch((err)=>{
            console.log("Error when get posts in explorer is ", err);
        });
    }
    
    render() { 
        return ( 
            <div className="container ex-container">
                <div className="row ex-content">
                    {this.getPosts()}
                </div>
            </div>
         );
    }
}

Explore.propTypes = {
    userInfo: PropTypes.object,
    postList: PropTypes.array,
    getUserInfo: PropTypes.func.isRequired,
    getPostExplore: PropTypes.func.isRequired,
    delPosts: PropTypes.func
  };
 
export default Explore;