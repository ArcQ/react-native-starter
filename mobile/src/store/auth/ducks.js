import createHelpers from 'utils/reduxHelpers';
import { fromJS } from 'immutable';

export const authNamespace = 'auth';
const { createConstantsAndActions } = createHelpers(namespace);

const constArr = [
  'LOGIN',
  'REGISTER',
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

export const { authConstants, authActions } = createConstantsAndActions(
  constArr,
);

/**
 * Selectors
 */

export const selectors = {
  myProfile: state => state.getIn([authNamespace, 'profile']),
  loggedIn: state => state.getIn([authNamespace, 'loggedIn']),
};

/**
 * Reducer
 */

// The initial application state
const initialState = fromJS({
  hasCheckedSession: false,
  loggedIn: false,
  profile: {},
});

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
