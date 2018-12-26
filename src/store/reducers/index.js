import {
  combineReducers
} from 'redux'
import post from './postList'
import userInfo from './userInfo'
import followerList from './followerList'
import followingList from './followingList'

const rootReducer = combineReducers({
  userInfo,
  post,
  followerList,
  followingList
})

export default rootReducer