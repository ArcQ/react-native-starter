import { fromJS } from 'immutable';
import { createConstantsAndActions } from 'utils/reduxHelpers';
import { normalizeAndUpdate } from 'utils/schema';

export const postNamespace = 'ideas';

const constArr = ['RECEIVE_IDEAS', 'REQUEST_NEXT_IDEAS', 'CREATE_IDEA'];

const IDEAS_LIST_K = 'post';

export const { constants, actions } = createConstantsAndActions(
  postNamespace,
  constArr,
);

export const selectors = {
  ideasList: state => state.getIn([postNamespace, 'ideasList']),
  ideasEntities: state => state.getIn([postNamespace, 'ideasEntities']),
};

const REQ_LIMIT = 20;

const initialState = fromJS({
  ideasList: undefined,
  ideasEntities: {},
  params: {
    limit: REQ_LIMIT,
    cursor: 'initial',
  },
  timesLoaded: 0,
  count: 0,
  lastPage: false,
  hasInit: false,
});

const c = constants;

export default function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case c.RECEIVE_IDEAS: {
      return (normalizeAndUpdate(state, 'ideas')(action.payload.ideas))
        .setIn([IDEAS_LIST_K, 'cursor'], action.payload.cursor)
        .updateIn([IDEAS_LIST_K, 'timesLoaded'], timesLoaded => timesLoaded + 1)
        .setIn([IDEAS_LIST_K, 'count'], action.payload.count)
        .setIn(
          [IDEAS_LIST_K, 'lastPage'],
          !!action.payload.cursor,
        );
    }
    default:
      return state;
  }
}
