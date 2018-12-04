import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/post/post';
import UserInfo from './components/userInfo/userInfo';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {getMainScreenExample()}
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
    postImage={`https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg`}
    postText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    isLiked={false}
  />);
}

const getUserInfoExample = () => {
  return (<UserInfo 
    userAvatar="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"
  />);
}

const getMainScreenExample = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}