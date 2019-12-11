import { fork, all } from 'redux-saga/effects';

import postSaga from 'store/post/sagas';

const defaultSagas = [postSaga];

export default function* rootSaga() {
  yield all(defaultSagas.map(s => fork(s)));
}
