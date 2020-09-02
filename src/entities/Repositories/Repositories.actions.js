// @flow
import * as ActionType from './Repositories.actionTypes';
import * as Api from './Repositories.api';

/**
 * Action creators to work with Repositories.
 *
 * @module Entity/Repositories/actions
 */

/**
 * Action for load all Repositories.
 *
 * Real request performing is optional.
 * Code that start request is placed in Repositories.sagas.js.
 * Request's code is placed in Repositories.api.js file.
 *
 * @param {string} userName
 *
 * @returns {Object} Action with type FETCH.
 * @memberof Entity/Repositories/actions
 */
export function fetchRepositories({ userName }: { userName: string }) {
  return {
    type: ActionType.FETCH,
    payload: {
      userName,
    },
  };
}

/**
 * Action for mark load Repositories process as failed.
 *
 * @param {{ error: { message: string } }} $1 - Key of Repositories instance and error.
 *
 * @returns {Object} Action with type FETCH_FAILED and error message as payload.
 * @memberof Entity/Repositories/actions
 */
export function fetchRepositoriesFailed({ error }: { error: Api.FetchRepositoriesError }) {
  return {
    type: ActionType.FETCH_FAILED,
    payload: {
      error,
    },
  };
}

/**
 * Action for mark load Repositories list process as finished by its key.
 *
 * @returns {Object} Action with type FETCH_SUCCESS.
 * @memberof Entity/Repositories/actions
 */
export function fetchRepositoriesSuccess() {
  return {
    type: ActionType.FETCH_SUCCESS,
  };
}

/**
 * Action for set Repositories record list inside the store.
 *
 * @param {Array<Object>} repositories - Array of instances of Repository to set.
 *
 * @returns {Object} Action with type SET and `{repositories}` as payload.
 * @memberof Entity/Repositories/actions
 */
export function setRepositories(repositories: Array<Object>) {
  return {
    type: ActionType.SET,
    payload: repositories,
  };
}
