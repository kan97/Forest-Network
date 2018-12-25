import * as Types from '../constants/actionTypes'

const initialState = {
  secret: null,
  fullName: 'Panda Team',
  post: 111,
  followers: 56,
  following: 98,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  avatar: "https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SECRET:
      return {
        ...state,
        secret: action.secret,
      }

    case Types.DEL_SECRET:
      return {
        ...state,
        secret: null,
      }

    default:
      return state;
  }
}

export default userInfo