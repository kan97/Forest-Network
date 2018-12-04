import React from 'react';
import Navbar from '../components/navbar/navbar';
import UserInfo from '../components/userInfo/userInfo';
import { showContentMenus } from '../routes'
  
  export const getUserInfoExample = () => {
    return (<UserInfo 
      userAvatar="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"
    />);
  }
  
  export const getMainScreenExample = () => {
    return (
      <React.Fragment>
        <Navbar />
        {showContentMenus()}
      </React.Fragment>
    );
  }