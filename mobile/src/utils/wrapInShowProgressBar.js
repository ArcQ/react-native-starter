/** @module * */
import { put } from 'redux-saga/effects';
import { actions as appActions } from 'store/app/ducks';
import uuid from 'uuid/v1';

/**
 * wrapInShowProgressBar - wrap around generators insde of sagas to start main progress
 * bar at top of page, once generator starts, and completes progress once generator ends
 *
 * @param generator
 * @returns {undefined}
 */
export default function wrapInShowProgressBar(generator) {
  return function* wrappedGenerator(...args) {
    // const k = uuid();
    // yield put(appActions.toggleProgressBar({ k }));
    const res = yield generator(...args);
    // check again, might have already hid it, might as well save a dispatch
    // yield put(appActions.toggleProgressBar({ k }));
    return res;
  };
}
