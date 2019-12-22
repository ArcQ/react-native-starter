import { put, fork, take } from 'redux-saga/effects';

import { alertsActions } from 'store/alert/ducks';

import { authConstants, authActions } from 'store/auth/ducks';

import {
  login, register, requestSession, logout, clearSession,
} from './auth';

const authDict = {
  [authConstants.LOGIN]: login,
  [authConstants.REGISTER]: register,
};

function* logoutWatcher(isLogin) {
  let isLogout;
  if (isLogin) {
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
    const loginAction = yield take([
      authConstants.LOGIN,
      authConstants.REGISTER,
    ]);
    const isLogin = yield authDict[loginAction.type](loginAction);
    yield put(authActions.changeAuthSuccess());
    yield logoutWatcher(isLogin);
  }
}

export default function* rootAuthSaga() {
  yield fork(authWatcher);
}
