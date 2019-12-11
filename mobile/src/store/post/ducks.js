import { fromJS } from 'immutable';
import { createConstantsAndActions } from 'utils/reduxHelpers';
import { normalizeAndUpdate } from 'utils/schema';

export const postNamespace = 'posts';

const constArr = ['RECEIVE_POSTS', 'REQUEST_NEXT_POSTS', 'CREATE_POST'];

const POSTS_LIST_K = 'post';

export const {
  constants: postConstants,
  actions: postActions,
} = createConstantsAndActions(postNamespace, constArr);

export const postSelectors = {
  postsList: state => state.getIn([postNamespace, 'postsList']),
  postsEntities: state => state.getIn([postNamespace, 'postsEntities']),
};

const REQ_LIMIT = 20;

const initialState = fromJS({
  postsList: undefined,
  postsEntities: {},
  params: {
    limit: REQ_LIMIT,
    cursor: 'initial',
  },
  timesLoaded: 0,
  count: 0,
  lastPage: false,
  hasInit: false,
});

const c = postConstants;

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case c.RECEIVE_POSTS: {
      return normalizeAndUpdate(
        state,
        'posts',
      )(action.payload.posts)
        .setIn([POSTS_LIST_K, 'cursor'], action.payload.cursor)
        .updateIn([POSTS_LIST_K, 'timesLoaded'], timesLoaded => timesLoaded + 1)
        .setIn([POSTS_LIST_K, 'count'], action.payload.count)
        .setIn([POSTS_LIST_K, 'lastPage'], !!action.payload.cursor);
    }
    default:
      return state;
  }
}
