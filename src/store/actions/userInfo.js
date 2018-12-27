import * as Types from '../constants/actionTypes'

export const getUserInfo = user => {
  return {
    type: Types.GET_USER_INFO,
    user,
  }
}

export const delUserInfo = () => {
  return {
    type: Types.DEL_USER_INFO,
  }
}

export const setName = name => {
  return {
    type: Types.SET_NAME,
    name,
  }
}

export const setPicture = picture => {
  return {
    type: Types.SET_PICTURE,
    picture,
  }
}

export const incUserBal = amount => {
  return {
    type: Types.INC_USER_BAL,
    amount
  }
}