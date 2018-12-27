import {
  combineReducers
} from 'redux'
import post from './postList'
import userInfo from './userInfo'
import followingList from './followingList'
import searchUserByKeyword from './search';
import myFollowingList from './followerList';

const rootReducer = combineReducers({
  userInfo,
  post,
  followingList,
  searchUserByKeyword,
  myFollowingList
})

export default rootReducer