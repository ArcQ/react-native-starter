// Libraries
import { put } from 'redux-saga/effects';

import navigationService from 'services/navigation/navigationService';
import storageService from 'services/storage/storageService';
import apiService from 'services/api/apiService';
import {
  authActions,
} from 'store/auth/ducks';

function* successfulLogin(data, loginType, isNewAccount) {
  yield put(authActions.setProfile({
    isNewAccount,
    profile: data.profile,
    avatar: data.profile.avatar.url,
  }));
  storageService.save('L_IN', 'true', new Date());
  navigationService.navigate('home');
}

// credentials could be {email,name} or {facebookAccessToken}
export function* login(action) {
  const { credentials } = action.payload;
  return yield apiService.post('login', function* onSuccess(response) {
    yield successfulLogin(response.data);
    return response;
  }, {
    ...credentials,
  });
}

export function* requestSession() {
  if (!storageService.get('L_IN')) {
    return false;
  }
  return yield apiService.post('checkSession', function* onSuccess(response) {
    yield successfulLogin(response.data);
    return response;
  });
}

export function* clearSession() {
  storageService.removeSession();
  yield put(authActions.clearSession());
  yield put(navigator.navigate(''));
}

export const logout = apiService.post('login', function* onSuccess(response) {
  yield successfulLogin(response.data);
  return response;
});

export function* register(action) {
  const { profile } = action.payload;
  yield api.mock('signup', function* onSuccess (response) {
    yield successfulLogin(response.data);
  }, {
    profile,
  });
}
