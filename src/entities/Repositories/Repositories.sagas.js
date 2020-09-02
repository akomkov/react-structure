// @flow
import type { Saga } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as Action from './Repositories.actions';
import * as ActionType from './Repositories.actionTypes';
import * as Api from './Repositories.api';

/**
 * Module that stores all sagas and work with requests' logic for Repositories.
 *
 * @module Entity/Repositories/sagas
 */

/**
 * Saga that try to load list of repositories and sets them into store.
 *
 * @param {Action.fetchRepositories} action - Action that initialize loading.
 *     It's a result, of action creator call, not itself. Action's payload
 *     should be the same type and shape as `API.fetchRepository` needs.
 * @private
 * @memberof Entity/Repositories/sagas
 */
export function* fetchRepositories(action: typeof Action.fetchRepositories): Saga<*> {
  try {
    const { userName } = action.payload;
    const fetchRepositoryResult: Api.FetchRepositoriesResult = yield call(
      Api.fetchRepositories, { userName },
    );
    const { data: { repositories } } = fetchRepositoryResult;
    if (!repositories.length) throw new Error('There is no repositories'); // todo handle this
    yield put(Action.setRepositories(repositories));
    yield put(Action.fetchRepositoriesSuccess());
  } catch (anyError) {
    const error: Api.FetchRepositoriesError = anyError;
    yield put(Action.fetchRepositoriesFailed({ error }));
  }
}

/**
 * Takes every Repositories.FETCH action and runs `fetchRepositories` saga.
 *
 * `fetchRepositories` may works in parallel.
 *
 * @memberof Entity/Repositories/sagas
 */
export function* fetchRepositoriesSaga(): Saga<*> {
  yield takeEvery(ActionType.FETCH, fetchRepositories);
}

export const runnableRepositoriesSagas = [fetchRepositoriesSaga];
