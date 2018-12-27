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
  
    case Types.INC_CURR_USER_SEQ:
        return {
          ...state,
          sequence: state.sequence + 1,
        }

      default:
        return state;
    }
  }
  
  export default userInfo