import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/post/post';
import UserInfo from './components/userInfo/userInfo';
import FollowerList from './components/follower/followerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {getList()}
      </div>
    );
  }
}

export default App;

const getPostExample = () => {
  return (<Post 
    ownerAvatar="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"
    ownerName="Kiettieu"
    postTime="02/12/2018"
    postLike={12}
    postComment={3}
    postShare={7}
    postImage={`https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg`}
    postText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    isLiked={false}
    isTimeline={true}
  />);
}

const getUserInfoExample = () => {
  return (<UserInfo 
    userAvatar="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"
  />);
}

const getList = () => {
  return (
    <FollowerList list={getFollowingList()} />
  );
}

const getFollowerList = () => {
  let list = [];
  list.push(
    {
      avatar:"https://instagram.fsgn2-3.fna.fbcdn.net/vp/47ec7e42667162b88ee6edad54156584/5CA352F1/t51.2885-19/s150x150/44377321_281267495857242_1536691637256716288_n.jpg",
      name:"KTT",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
      name:"Miao Miao",
      isFollowing:false
    }
  )

  list.push(
    {
      avatar:"https://www.wonderplugin.com/videos/demo-image0.jpg",
      name:"Sight",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?auto=compress&cs=tinysrgb&h=350",
      name:"Rosike",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGU91BKoHbBa9bry8Go-TTW9t263vcG9aqzaIwrBfNtWanOeq9Q",
      name:"Sunflower",
      isFollowing:false
    }
  )

  return list;
}

const getFollowingList = () => {
  let list = [];
  list.push(
    {
      avatar:"https://i.pinimg.com/originals/6a/bc/b6/6abcb6df12595ae4eeb390ebf2610cba.png",
      name:"Eevee",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://cdn.gamerant.com/wp-content/uploads/new-pokemon-go-additions-datamine.jpg.optimal.jpg",
      name:"Jirachi",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://pokemongohub.net/wp-content/uploads/2018/03/mew-pokemon-go.jpg",
      name:"Mew mew",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-03-28-11-25/Mareep.jpg/EG11/resize/300x-1/quality/75/format/jpg",
      name:"Mereep beeee",
      isFollowing:true
    }
  )

  list.push(
    {
      avatar:"https://pokemongolive.com/img/posts/unibailsafarizone.jpg",
      name:"GO safari",
      isFollowing:true
    }
  )

  return list;
}