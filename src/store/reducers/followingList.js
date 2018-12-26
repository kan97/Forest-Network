import * as Types from '../constants/actionTypes'

const initialState = {
  list: []
}

const followingList = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_FOLLOWING:
      const list = action.list.map((usr)=>{
        return {
          name: usr.name,
          avatar: usr.picture,
          objectId: usr.objectId,
          publicKey: usr.publicKey
        }
      });

      return {
        ...state,
        list: list
      }
      
    default:
      return state;
  }
}

export default followingList