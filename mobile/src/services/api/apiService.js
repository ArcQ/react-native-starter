/* @module */
import { delay } from 'redux-saga';

// import { actions as errorActions } from 'shared/store/error/ducks';
import request from './request';

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_PATCH = 'PATCH';
const METHOD_DELETE = 'DELETE';

const API_DOMAIN = 'http://localhost:8080';
/**
 * apiCall - sends action to errorActions on api err
 *
 * @param isPost=false
 * @returns {undefined}
 */
function apiCall(method) {
  /**
   * reqGenerator - for both api.get and post, these are the parameters
   * you need to pass in
   *
   * @param url
   * @param cb
   * @param data={}
   * @param requestOptions={}
   * @param customApiDomain=env.API_DOMAIN
   * @returns {undefined}
   */
  return function* reqGenerator(
    endpoint,
    cb,
    data = {},
    requestOptions = { credentials: 'include' },
    customApiDomain = API_DOMAIN,
  ) {
    const res = yield request(
      customApiDomain,
      endpoint,
      data,
      { ...requestOptions, method },
    );

    if (!res.data || res.data.error) {
      // yield put(errorActions.setError({ value: req.data.error }));
      return false;
    }
    return yield cb(res.data);
  };
}

/**
 * api - general api function
 *
 * @property {func} get
 * @property {func} post
 *
 * @returns {undefined}
 */
export default {
  get: function* get(...args) {
    yield apiCall(METHOD_GET)(...args);
  },
  post: function* post(...args) {
    yield apiCall(METHOD_POST)(...args);
  },
  put: function* put(...args) {
    yield apiCall(METHOD_PUT)(...args);
  },
  patch: function* patch(...args) {
    yield apiCall(METHOD_PATCH)(...args);
  },
  delete: function* deleete(...args) {
    yield apiCall(METHOD_DELETE)(...args);
  },
  mock: function* mock(endpoint, gen) {
    yield delay(1000);
    yield gen();
  },
};
