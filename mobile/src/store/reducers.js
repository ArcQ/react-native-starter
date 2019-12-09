import { combineReducers } from 'redux-immutable';

import authReducer, { authNamespace } from 'store/auth/ducks';
import postReducer, { postNamespace } from 'store/post/ducks';
import alertReducer, { alertNamespace } from 'store/alert/ducks';
import appReducer, { appNamespace } from 'store/app/ducks';

export default function createReducer(asyncReducers) {
  return combineReducers({
    [appNamespace]: appReducer,
    [alertNamespace]: alertReducer,
    [authNamespace]: authReducer,
    [postNamespace]: postReducer,
    ...asyncReducers,
  });
}
