// @flow
import * as Axios from 'axios';

/**
 * Requests to API for working with Repositories.
 *
 * @module Entity/Repositories/api
 */

/**
 * Performs request to the api for load Repositories of user.
 *
 * @returns {Object} Promise-like object.
 * @memberof Entity/Repositories/api
 */
export function fetchRepositories({ userName }: { userName: string }) {
  return Axios.get(`github.com/users/${userName}/repos`);
}

export type FetchRepositoriesResult = Axios.AxiosXHR<any>
export type FetchRepositoriesError = Error | Axios.AxiosError<any>
