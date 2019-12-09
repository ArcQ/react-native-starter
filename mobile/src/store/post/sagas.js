import {
  call, put, fork,
} from 'redux-saga/effects';

import {
  repeat,
} from 'ramda';

import { watchActionsLatest } from 'utils/sagas/watchActions';

import {
  actions as ideasActions,
  constants as ideasConstants,
} from './ducks';


const mockIdeas = repeat({
  title: 'Idea One',
  desc: 'Best Idea Ever',
}, 100).map((idea, i) => ({ ...idea, id: i }));


function* requestIdeasList() {
  yield put(ideasActions.receiveIdeas({
    ideas: mockIdeas,
  }));
  // yield api.get('ideas', function* onR(response) {
  //   yield put(ideasActions.receiveIdeas({
  //     ideas: response.ideas || mockIdeas,
  //   }));
  // });
}

function* createIdea({ payload: { idea } }) {
  yield api.mock('posts', function* onR(response) {
    yield put(ideasActions.receiveIdeas({
      ideas: response.ideas || mockIdeas,
    }));
  });
}

export default function* ideasSaga() {
  yield call(requestIdeasList);
  yield fork(watchActionsLatest, [
    [ideasConstants.REQUEST_NEXT_IDEAS, requestIdeasList],
    [ideasConstants.CREATE_IDEA, createIdea],
  ]);
}
