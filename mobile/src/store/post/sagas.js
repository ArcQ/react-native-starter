import {
  call, put, fork,
} from 'redux-saga/effects';
import {
  repeat,
} from 'ramda';

import apiService from 'services/api/apiService';
import { watchActionsLatest } from 'utils/sagas/watchActions';

import {
  postActions,
  postConstants,
} from './ducks';

const mockPosts = repeat({
  title: 'Post 1',
  desc: 'Best post Ever',
}, 100).map((post, i) => ({ ...post, id: i }));


function* requestPostsList() {
  yield put(postActions.receivePosts({
    posts: mockPosts,
  }));
}

function* createPost({ payload: { post } }) {
  yield apiService.mock('posts', function* onR() {
    yield put(postActions.createPost({ post }));
  });
}

export default function* postsSaga() {
  yield call(requestPostsList);
  yield fork(watchActionsLatest, [
    [postConstants.REQUEST_NEXT_POSTS, requestPostsList],
    [postConstants.CREATE_POST, createPost],
  ]);
}
