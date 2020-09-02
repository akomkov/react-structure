// @flow
import { Repository } from './Repositories.record';

/**
 * Transforms DTO into record.
 *
 * Checks if activitiesDto is valid in order to RepositoriesDtoSchema.
 * If is not valid, throw an Error (in async mode).
 *
 * @param {Object} repository - DTO.
 * @returns {Repository} - Instance of Repository.
 * @memberof Entity/Repositories/utils
 */
export function dtoToRecord(repository: Object): Repository {
  return new Repository({ ...repository });
}

/**
 * Create Map of Repositories by id.
 *
 * @param {*} state.
 * @param {Array} repositories.
 * @returns {*}
 */
export function setRepositories(state: *, repositories: Array<Object>) {
  const repositoriesMap = repositories.reduce((accumulator, repository) => {
    accumulator[repository.id] = dtoToRecord(repository);
    return accumulator;
  }, {});

  return state.setIn('map', repositoriesMap);
}
