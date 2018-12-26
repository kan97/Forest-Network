import * as Types from '../constants/actionTypes'

const initialState = {
  list: []
}

const searchUserByKeyword = (state = initialState, action) => {
    switch (action.type) {  
      case Types.SEARCH_USER:
      if (action && action.list) {
        const results = action.list.map((usr)=>{
          return {
            name: usr.name,
            avatar: usr.picture,
            objectId: usr.objectId,
            publicKey: usr.publicKey
          }
        });
  
        return {
          ...state,
          list: results
        }
      }
      else {
        return state;
      }
  
      default:
        return state;
    }
  }
  
  export default searchUserByKeyword;