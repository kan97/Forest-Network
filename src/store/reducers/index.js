import {
  combineReducers
} from 'redux'
import post from './postList'
import userInfo from './userInfo'
import followingList from './followingList'
import searchUserByKeyword from './search';
import currUser from './currUser'

const rootReducer = combineReducers({
  userInfo,
  post,
  followingList,
  searchUserByKeyword,
  currUser
})

export default rootReducer