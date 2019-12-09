import { fromJS } from 'immutable';
import {
  createConstantsAndActions,
  createSelectorsAndState,
} from 'utils/reduxHelpers';

export const alertNamespace = 'alerts';

const constArr = ['TOGGLE_SUCCESS_TOAST', 'TOGGLE_ERROR_TOAST'];

export const { alertConstants, alertsActions } = createConstantsAndActions(
  alertNamespace,
  constArr,
);

const { initialState, selectors: asels } = createSelectorsAndState(
  alertNamespace,
  {
    toast: {},
  },
);

export const selectors = {
  ...asels,
  toast: state => state.getIn([alertNamespace, 'toast']),
};

const c = alertConstants;

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_SUCCESS_TOAST: {
      return state.set(
        'toast',
        fromJS({
          type: 'success',
          ...action.payload,
        }),
      );
    }
    default:
      return state;
  }
}
