import * as Types from '../constants/actionTypes'

export const setCurrUser = user => {
  return {
    type: Types.SET_CURR_USER,
    user,
  }
}