import { put, fork, take } from 'redux-saga/effects';

import { alertsActions } from 'store/alert/ducks';

import { authConstants, authActions } from 'store/auth/ducks';

import { signIn, signUp, requestSession, logout, clearSession } from './auth';

const authDict = {
  [authConstants.SIGN_IN]: signIn,
  [authConstants.SIGN_UP]: signUp,
};

function* logoutWatcher(isSignIn) {
  let isLogout;
  if (isSignIn) {
    while (!isLogout) {
      isLogout = yield take([
        authConstants.LOGOUT,
        authConstants.DEACTIVATE_ACCOUNT,
      ]);

      if (isLogout.type === authConstants.LOGOUT) {
        yield logout();
      }

      yield clearSession();
      yield put(authActions.changeAuthSuccess());

      if (isLogout.type === authConstants.DEACTIVATE_ACCOUNT) {
        yield put(
          alertsActions.setMsg({ type: 'DEACTIVATED_ACCOUNT_SUCCESS' }),
        );
      }
    }
  }
}

function* authWatcher() {
  const isSession = yield requestSession();
  yield put(authActions.sessionChecked());
  yield logoutWatcher(isSession);
  while (true) {
    // eslint-disable-line
    const signInAction = yield take([
      authConstants.SIGN_IN,
      authConstants.SIGN_UP,
    ]);
    const isSignIn = yield authDict[signInAction.type](signInAction);
    yield put(authActions.changeAuthSuccess());
    yield logoutWatcher(isSignIn);
  }
}

export default function* rootAuthSaga() {
  yield fork(authWatcher);
}
