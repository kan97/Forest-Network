import * as Types from '../constants/actionTypes'

const initialState = {
  secret: null,
  fullName: null,
  post: 0,
  followers: 0,
  following: 0,
  avatar: "https://mobile-event-app.com/wp-content/themes/uplift/images/default-thumb.png",
  sequence: -1,
  balance: -1,
  bandwidthTime: null,
  username: null,
  objectId: null
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_INFO:
    let follow = action.user.followings ? action.user.followings.length : 0
      return {
        ...state,
        secret: action.secret,
        fullName: action.user.name,
        avatar: action.user.picture,
        sequence: action.user.sequence,
        balance: action.user.balance,
        bandwidthTime: action.user.bandwidthTime,
        username: action.user.username,
        following: follow,
        objectId: action.user.objectId
      }

    case Types.DEL_USER_INFO:
      return {
        ...state,
        secret: null,
        fullName: null,
        avatar: null,
        sequence: -1,
        balance: -1,
        bandwidthTime: null,
        username: null,
        followings: 0,
        post: 0,
        objectId: null
      }

    case Types.SET_NAME:
      return {
        ...state,
        fullName: action.name,
        sequence: state.sequence + 1,
      }

    case Types.SET_PICTURE:
      return {
        ...state,
        avatar: action.picture,
        sequence: state.sequence + 1,
      }

    default:
      return state;
  }
}

export default userInfo