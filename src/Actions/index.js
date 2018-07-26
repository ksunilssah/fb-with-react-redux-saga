import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  GET_USER_DETAILS,
  REQUEST_USER_DATA,
  GET_COMMENTS,
  REQUEST_COMMENTS,
  REQUEST_POST_API,
  POST_NEW_COMMENT
} from "../constants";

export function requestApiData() {
  return {
    type: REQUEST_API_DATA
  };
}

export function receiveApiData(posts) {
  return {
    type: RECEIVE_API_DATA,
    payload: posts
  };
}

export function requestUserData() {
  return {
    type: REQUEST_USER_DATA
  };
}

export function requestPostApi(newPost) {
  return {
    type: REQUEST_POST_API,
    payload: newPost
  }
}

export function getUserDetails(users) {
  return {
    type: GET_USER_DETAILS,
    payload: users
  };
}

export function requestComments() {
  return {
    type: REQUEST_COMMENTS
  }
}

export function getCommentsList(comments) {
  return {
    type: GET_COMMENTS,
    payload: comments
  }
}

export function postComment(comments) {
  return {
    type: POST_NEW_COMMENT,
    payload: comments
  }
}