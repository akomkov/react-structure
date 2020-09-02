// @flow
import * as Immutable from 'immutable';
import { createSelector } from 'reselect';

import { RepositoriesStateRecord } from './Repositories.reducer';

const emptyMap = Immutable.Map();

/**
 * Selectors for working with data inside store.
 *
 * @module Entity/Repositories/selectors
 */

/**
 * Selects base state of Repositories from store.
 *
 * @function
 * @param {*} state - Global application state.
 * @returns {RepositoriesStateRecord} - State of Repositories from store.
 * @memberof Entity/Repositories/selectors
 */
const selectBase: (*) => RepositoriesStateRecord = createSelector(
  (state) => state,
  (state) => state.Repositories || RepositoriesStateRecord,
);

/**
 * Selects activitiesMap.
 *
 * @function
 * @param {*} state - Global application state.
 * @returns {Immutable.List} - list of Repositories.
 * @memberof Entity/Repositories/selectors
 */
export const selectRepositoriesMap: (*) => Object = createSelector(
  selectBase,
  (all) => all.get('map', emptyMap),
);

/**
 * Selects isLoading state of All.
 *
 * @function
 * @param {*} state - Global application state.
 * @returns {boolean} - isLoading.
 * @memberof Entity/Repositories/selectors
 */
export const selectIsRepositoriesLoading: (*) => Object = createSelector(
  selectBase,
  (all) => all.get('isLoading', false),
);
