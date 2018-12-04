import {
  combineReducers
} from 'redux'
import postList from './postList'
import userInfo from './userInfo'
import followerList from './followerList'
import followingList from './followingList'

const rootReducer = combineReducers({
  userInfo,
  postList,
  followerList,
  followingList
})

export default rootReducer