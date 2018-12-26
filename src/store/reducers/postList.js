import * as Types from '../constants/actionTypes'

const initialState = {
  postList: [{
      ownerAvatar: "https://mobile-event-app.com/wp-content/themes/uplift/images/default-thumb.png",
      ownerName: "",
      postTime: "",
      postLike: 0,
      postComment: 0,
      postShare: 0,
      postImage: null,
      postText: "",
      isLiked: false,
      isYourPost: true,
      interact: 0,
      comments: [],
      hash: null
    }
  ]
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POST_TIMELINE:
      const posts = action.post.map((e)=>{
        let comments = e.comments ? e.comments.length : 0;
        let reacts = e.reactions ? e.reactions.length : 0;
        let text = e.text ? e.text : "";
        return {
          postText: text,
          postImage: null,
          postComment: comments,
          postLike: reacts,
          interact: e.myReaction ? e.myReaction : 0,
          comments: e.comments,
          time: e.time,
          hash: e.hash
        }
      });
      
      return {
        ...state,
        postList: posts
      }
    default:
      return state;
  }
}

export default post