import { put, call, takeLatest, all } from "redux-saga/effects";
import {
  receiveApiData,
  getUserDetails,
  getCommentsList
} from "../Actions";
import {
  REQUEST_API_DATA,
  REQUEST_USER_DATA,
  REQUEST_COMMENTS,
  REQUEST_POST_API,
  POST_NEW_COMMENT
} from "../constants";
import { fetchData, postAPI } from "../Api/fetch";

function* getPostList() {
  try {
    const data = yield call(fetchData, "posts");
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getUserData() {
  try {
    const data = yield call(fetchData, "profile");
    yield put(getUserDetails(data));
  } catch (e) {
    console.log(e);
  }
}

function* getCommentsData() {
  try {
    const data = yield call(fetchData, "comments");
    yield put(getCommentsList(data));
  } catch (e) {
    console.log(e);
  }
}

function* addPost(action) {
  try {
    const status = yield call(postAPI, { data: action.payload, url: "posts" });
  } catch (e) {
    console.log(e);
  }
}

function* postComment(action) {
  try {
    const status = yield call(postAPI, {
      data: action.payload,
      url: "comments"
    });
  } catch (e) {
    console.log(e);
  }
}

function* postCommentWatcher() {
  yield takeLatest(POST_NEW_COMMENT, postComment);
}
export function* addPostWatch() {
  yield takeLatest(REQUEST_POST_API, addPost);
}

export function* getData() {
  yield takeLatest(REQUEST_API_DATA, getPostList);
}

export function* userData() {
  yield takeLatest(REQUEST_USER_DATA, getUserData);
}

export function* getComments() {
  yield takeLatest(REQUEST_COMMENTS, getCommentsData);
}

export default function* rootSaga() {
  yield all([
    getData(),
    userData(),
    getComments(),
    addPostWatch(),
    postCommentWatcher()
  ]);
}
