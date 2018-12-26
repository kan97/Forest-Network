import * as Types from '../constants/actionTypes'

export const getFollowing = (list) => {
  return {
    type: Types.GET_FOLLOWING,
    list
  }
}

export const searchUser = (list) => {
  return {
    type: Types.SEARCH_USER,
    list
  }
}