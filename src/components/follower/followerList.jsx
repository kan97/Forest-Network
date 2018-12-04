import React, { Component } from 'react';
import './followerList.css';

import Follower from './follower';

class FollowerList extends Component {

    getFollowerList = () => {
        if (this.props.list) {
            return this.props.list.map((follower, index)=>{
                return <Follower 
                    key={index}
                    avatar={follower.avatar}
                    name={follower.name}
                    isFollowing={follower.isFollowing}
                />
            });
        }
        else {
            return (
                <div className="row">
                    This list is still empty!
                </div>
            );
        }
    }

    render() { 
        return ( 
            <div className="container list-follow-container">
                {this.getFollowerList()}
            </div>
         );
    }
}
 
export default FollowerList;