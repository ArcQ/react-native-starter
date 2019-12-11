import {
  createConstantsAndActions,
  createSelectorsAndState,
} from 'utils/reduxHelpers';

export const appNamespace = 'app';

const constArr = ['SET_APP_LOADED', 'TOGGLE_PROGRESS'];

export const { constants, actions } = createConstantsAndActions(
  appNamespace,
  constArr,
);

const { initialState, selectors } = createSelectorsAndState(appNamespace, {
  appLoaded: false,
  loadingActions: [],
});

export const appSelectors = {
  ...selectors,
  showProgress: state => state.getIn([appNamespace, 'loadingActions']).size > 0,
};

const c = constants;

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_PROGRESS_BAR:
      return state.update('loadingActions', loadingActions => {
        const foundI = loadingActions.findIndex(v => v === action.payload.k);
        return foundI
          ? loadingActions.remove(foundI)
          : loadingActions.push(action.payload.k);
      });
    default:
      return state;
  }
}
