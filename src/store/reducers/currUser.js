import * as Types from '../constants/actionTypes'

const initialState = {
  sequence: -1,
  objectId: null
}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
      case Types.SET_CURR_USER:
        return {
          ...state,
          objectId: action.user.objectId,
          sequence: action.user.sequence,
        }
  
      default:
        return state;
    }
  }
  
  export default userInfo