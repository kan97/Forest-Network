import * as Types from '../constants/actionTypes'

const initialState = {
  followingList: [{
    name: null,
    avatar: "https://mobile-event-app.com/wp-content/themes/uplift/images/default-thumb.png",
    username: null,
    objectId: null,
    isFollowing: true
  }
  ]
}

const followingList = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_FOLLOWING:
      console.log("List:", action.list);
      const list = action.list.map((usr)=>{
        return {
        name: usr.name,
        avatar: usr.picture,
        username: usr.username,
        objectId: usr.objectId
        }
      });

      return {
        ...state,
        followingList: list
      }

    default:
      return state;
  }
}

export default followingList