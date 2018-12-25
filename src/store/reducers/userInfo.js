import * as Types from '../constants/actionTypes'

const initialState = {
  secret: null,
  fullName: null,
  post: 111,
  followers: 56,
  following: 98,
  avatar: null,
  sequence: -1,
  balance: -1,
  bandwidthTime: null,
  username: null,
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_INFO:
      return {
        ...state,
        secret: action.secret,
        fullName: action.user.name,
        avatar: action.user.picture,
        sequence: action.user.sequence,
        balance: action.user.balance,
        bandwidthTime: action.user.bandwidthTime,
        username: action.user.username,
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
      }

    case Types.SET_NAME:
      return {
        ...state,
        fullName: action.name,
        sequence: state.sequence + 1,
      }

    default:
      return state;
  }
}

export default userInfo