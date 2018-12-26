import {
  combineReducers
} from 'redux'
import post from './postList'
import userInfo from './userInfo'
import followingList from './followingList'

const rootReducer = combineReducers({
  userInfo,
  post,
  followingList
})

export default rootReducer