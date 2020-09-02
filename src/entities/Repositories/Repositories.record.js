// @flow
import * as Immutable from 'immutable';

// import { User } from '../Users/Users.record';

/**
 * Type of Repositories record that describes default values and shape.
 *
 * @name RepositoryShape
 * @type {Object}
 *
 * @property {number} id.
 * @property {string} nodeId.
 * @property {string} name.
 * @property {string} fullName.
 * @property {Object} owner.
 * @property {boolean} private.
 * @property {string} htmlUrl.
 * @property {string} description.
 *
 * @memberof Entity/Repositories/reducer
 */
type RepositoryShape = {
  id: number,
  nodeId: string,
  name: string,
  fullName: string,
  // owner: User, // todo add User model here
  private: boolean,
  htmlUrl: string,
  description: string,
  // todo add more necessary fields here
};

/**
 * This is the shape and default properties for every instance of Repositories.
 *
 * @property {string} key - The key of Repositories.
 * @memberof Entity/Repositories/reducer
 */
// eslint-disable-next-line import/prefer-default-export
export const Repository: Immutable.RecordFactory<RepositoryShape> = Immutable.Record(
  {
    id: 0,
    nodeId: '',
    name: '',
    fullName: '',
    owner: {},
    private: false,
    htmlUrl: '',
    description: '',
  },
);
