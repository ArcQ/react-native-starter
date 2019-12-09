import { fork, all } from 'redux-saga/effects';

import ideasSaga from 'store/ideas/sagas';

const defaultSagas = [ideasSaga];

export default function* rootSaga() {
  yield all(defaultSagas.map(s => fork(s)));
}
