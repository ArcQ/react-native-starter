// Libraries
import { put } from 'redux-saga/effects';

import navigationService from 'services/navigation/navigationService';
import storageService from 'services/storage/storageService';
import apiService from 'services/api/apiService';
import { authActions } from 'store/auth/ducks';

function* successfulSignIn(data, signInType, isNewAccount) {
  yield put(
    authActions.setProfile({
      isNewAccount,
      profile: data.profile,
      avatar: data.profile.avatar.url,
    }),
  );
  storageService.save('L_IN', 'true', new Date());
  navigationService.navigate('home');
}

// credentials could be {email,name} or {facebookAccessToken}
export function* signIn(action) {
  const { credentials } = action.payload;
  return yield apiService.post(
    'signIn',
    function* onSuccess(response) {
      yield successfulSignIn(response.data);
      return response;
    },
    {
      ...credentials,
    },
  );
}

export function* requestSession() {
  if (!storageService.get('L_IN')) {
    return false;
  }
  return yield apiService.post('checkSession', function* onSuccess(response) {
    yield successfulSignIn(response.data);
    return response;
  });
}

export function* clearSession() {
  storageService.removeSession();
  yield put(authActions.clearSession());
  yield put(navigator.navigate(''));
}

export const logout = apiService.post('signIn', function* onSuccess(response) {
  yield successfulSignIn(response.data);
  return response;
});

export function* signUp(action) {
  const { profile } = action.payload;
  yield apiService.mock(
    'signup',
    function* onSuccess(response) {
      yield successfulSignIn(response.data);
    },
    {
      profile,
    },
  );
}
