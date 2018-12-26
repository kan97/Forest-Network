import * as Types from '../constants/actionTypes'

export const getFollowing = (list) => {
  return {
    type: Types.GET_FOLLOWING,
    list
  }
}