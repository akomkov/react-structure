// @flow
import * as Immutable from 'immutable';

import * as ActionType from './Repositories.actionTypes';
import { Repository } from './Repositories.record';
import { setRepositories } from './Repositories.utils';

/**
 * Module that knows how to transform state of Repositories.
 *
 * @module Entity/Repositories/reducer
 */

/**
 * Type of RepositoriesStateRecord that describes default values
 * and shape for state of Repositories.
 *
 * @name RepositoriesStateShape
 * @type {Object}
 * @property {boolean} listLoading - Flag that shows if list of Repositories is loading currently.
 * @property {Immutable.Map<string, Repository>} entities - Hasmap for all instances of Repositories
 *     saved in store.
 * @property {Immutable.List<string>} keys - List of all keys of Repositories
 *     that are stored in store.
 * @memberof Entity/Repositories/reducer
 */
export type RepositoriesStateShape = {
  isLoading: boolean,
  entities: Immutable.Map<string, Repository>,
};

/**
 * Record that describes default values and shape for state of Repositories.
 *
 * @returns {RepositoriesStateRecord} - New state.
 * @memberof Entity/Repositories/reducer
 */
// eslint-disable-next-line max-len
export const RepositoriesStateRecord: Immutable.RecordFactory<RepositoriesStateShape> = Immutable.Record(
  {
    isLoading: false,
    map: Immutable.Map(),
  },
);

const defaultState = new RepositoriesStateRecord();

/**
 * Reducer that transforms state for Repositories.
 *
 * @param {RepositoriesStateRecord} state - Current state for Repositories.
 * @param {Object} action - Action that may change the state.
 *
 * @returns {RepositoriesStateRecord} New (if has any update) or old state record.
 * @memberof Conference/Entity/Repositories/reducer
 */
export default (state: RepositoriesStateRecord = defaultState, action: Object) => {
  switch (action.type) {
    case ActionType.FETCH:
      return state
        .setIn('isLoading', true)
        .setIn('error', null);

    case ActionType.FETCH_FAILED:
      return state
        .setIn('isLoading', false)
        .setIn('error', Immutable.fromJS(action.payload.error));

    case ActionType.FETCH_SUCCESS:
      return state.setIn('isLoading', false);

    case ActionType.SET:
      return setRepositories(state, action.payload);

    default:
      return state;
  }
};
