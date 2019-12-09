import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({});
export default function configureStore(initialState) {
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then(reducerModule => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }
  return store;
}
