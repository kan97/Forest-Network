import * as Types from '../constants/actionTypes'

export const setCurrUser = user => {
  return {
    type: Types.SET_CURR_USER,
    user,
  }
}

export const incCurrUserSeq = () => {
  return {
    type: Types.INC_CURR_USER_SEQ,
  }
}