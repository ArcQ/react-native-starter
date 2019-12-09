/* @module */
// vendor
import { createActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { mapObjIndexed } from 'ramda';
import constants from 'namespace-constants';

function actionsNamespaceWrapper(namespace) {
  return obj =>
    Object.keys(obj).reduce(
      (newActions, key) =>
        Object.assign(newActions, {
          [key]: payload => {
            const action = obj[key](payload);
            return Object.assign(action, {
              type: `${namespace}/${action.type}`,
            });
          },
        }),
      {},
    );
}

export function createConstantsAndActions(nameSpace, constArr) {
  const wrapNamespace = actionsNamespaceWrapper(nameSpace);
  const _createConstantsAndActions = arr => ({
    actions: wrapNamespace(createActions(...arr)),
    constants: constants(nameSpace, arr, { separator: '/' }),
  });
  return _createConstantsAndActions(constArr);
}

export function createSelectorsAndState(nameSpace, stateTemplate) {
  return {
    initialState: fromJS(stateTemplate),
    selectors: mapObjIndexed((_, k) => state => state.getIn([nameSpace, k])),
  };
}
