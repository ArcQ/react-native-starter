import { schema, normalize } from 'normalizr';
import { fromJS, List as ImmutableList, Map as ImmutableMap } from 'immutable';
import { pipe } from 'ramda';

export const baseObj = new schema.Entity('dbObject', {}, { idAttribute: 'id' });

const normalizeBase = payload => normalize(payload, [baseObj]);

const updateState = (state, prefix = '') => normalized =>
  state
    .update(`${prefix}Entities`, entities =>
      (entities || new ImmutableMap()).merge(
        fromJS(normalized.entities.dbObject),
      ),
    )
    .update(`${prefix}List`, list =>
      // react native cannot map immutable lists out of box
      (list || []).concat(normalized.result),
    );

export const normalizeAndUpdate = (state, prefix) =>
  pipe(normalizeBase, updateState(state, prefix));
