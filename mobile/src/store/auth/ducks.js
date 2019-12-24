import {
  createConstantsAndActions,
  createSelectorsAndState,
} from 'utils/reduxHelpers';

import { fromJS } from 'immutable';

export const authNamespace = 'auth';

const constArr = [
  'SIGN_IN',
  'SIGN_UP',
  'RESET_PASSWORD',
  'LOGOUT',
  'SET_PROFILE',
  'CHECK_SESSION',
  'CLEAR_SESSION',
  'DEACTIVATE_ACCOUNT',
  'CHANGE_PROFILE',
];

/**
 * Constants and Actions
 */

export const {
  constants: authConstants,
  actions: authActions,
} = createConstantsAndActions(authNamespace, constArr);

const { initialState, selectors } = createSelectorsAndState(authNamespace, {
  hasCheckedSession: false,
  loggedIn: false,
  profile: {},
});

/**
 * Selectors
 */

export const authSelectors = {
  ...selectors,
};

/**
 * Reducer
 */
const c = authConstants;

// Takes care of changing the application state
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case c.CHECK_SESSION:
      return state.setIn(['hasCheckedSession'], true);
    case c.CLEAR_SESSION:
      return initialState.setIn(['hasCheckedSession'], true);
    case c.SET_PROFILE:
      return state
        .setIn(['profile'], fromJS(action.payload.profile))
        .setIn(['loggedIn'], true)
        .setIn(['hasCheckedSession'], true);
    case c.CHANGE_PROFILE:
      return Object.keys(action.payload).reduce(
        (stateObj, attr) =>
          stateObj.setIn(
            ['profile', ...action.payload[attr].keyArr],
            fromJS(action.payload[attr].value),
          ),
        state,
      );
    default:
      return state;
  }
}
