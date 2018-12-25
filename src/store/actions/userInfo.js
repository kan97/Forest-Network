import * as Types from '../constants/actionTypes'

export const setSecret = secret => {
  return {
    type: Types.SET_SECRET,
    secret
  }
}

export const delSecret = () => {
  return {
    type: Types.DEL_SECRET,
  }
}