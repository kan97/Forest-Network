import * as Types from '../constants/actionTypes'

export const getPostTimeline = (post) => {
  return {
    type: Types.GET_POST_TIMELINE,
    post
  }
}

export const getPostExplore = (post) => {
  return {
    type: Types.GET_POST_EXPLORE,
    post
  }
}

export const getPostFollowing = (post) => {
  return {
    type: Types.GET_POST_FOLLOWING,
    post
  }
}

export const delPosts = () => {
  return {
    type: Types.DEL_POST
  }
}