import {
  combineReducers
} from 'redux'
import post from './postList'
import userInfo from './userInfo'
import followingList from './followingList'
import searchUserByKeyword from './search';

const rootReducer = combineReducers({
  userInfo,
  post,
  followingList,
  searchUserByKeyword
})

export default rootReducer