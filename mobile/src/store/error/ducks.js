import {
  createConstantsAndActions,
  createSelectorsAndState,
} from 'utils/reduxHelpers';

export const errorNamespace = 'error';

const constArr = ['HANDLE_ERROR'];

export const {
  constants: errorConstants,
  actions: errorActions,
} = createConstantsAndActions(errorNamespace, constArr);

const { initialState, selectors } = createSelectorsAndState(errorNamespace, {
  toast: {},
});

export const errorSelectors = {
  ...selectors,
  toast: state => state.getIn([errorNamespace, 'toast']),
};

const c = errorConstants;

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case c.HANDLE_ERROR: {
      return state.set('error', action.payload.error);
    }
    default:
      return state;
  }
}
