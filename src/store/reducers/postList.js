import * as Types from '../constants/actionTypes'

const initialState = {
  postList: []
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
          hash: e.hash,
          avatar: e.user.picture ? e.user.picture : "https://png.pngtree.com/svg/20161212/personal_default_avatar_for_mobile_phone_app__146524.png",
          fullName: e.user.name,
          isPostTimeline: true,
          reactions: e.reactions
        }
      });
      
      return {
        ...state,
        postList: posts
      }

    case Types.GET_POST_EXPLORE:
      const exposts = action.post.map((e)=>{
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
          hash: e.hash,
          avatar: e.user.picture ? e.user.picture : "https://png.pngtree.com/svg/20161212/personal_default_avatar_for_mobile_phone_app__146524.png",
          fullName: e.user.name,
          isPostTimeline: false,
          reactions: e.reactions
        }
      });
      
      return {
        ...state,
        postList: exposts
      }

    case Types.DEL_POST:
      return {
        ...state,
        postList: []
      }

    default:
      return state;
  }
}

export default post