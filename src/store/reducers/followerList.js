import * as Types from '../constants/actionTypes'

const initialState = {
  list:[]
}

const myFollowingList = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MYFOLLOWING:
      const list = action.list.map((usr)=>{
        return usr;
      });

      return {
        ...state,
        list: list
      }

    default:
      return state;
  }
}

export default myFollowingList