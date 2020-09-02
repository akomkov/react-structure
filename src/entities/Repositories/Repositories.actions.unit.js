import { expect } from 'chai';

import * as Action from './Repositories.actions';
import * as ActionType from './Repositories.actionTypes';
import { Repository } from './Repositories.record';

describe('Entity::Repositories::actions', () => {
  it('exports only functions', () => {
    Object.values(Action).forEach((action) => {
      expect(typeof action).to.be.equal('function');
    });
  });

  it('exports action creators that have "Repositories" as name\'s part', () => {
    Object.keys(Action).forEach((actionName) => {
      const endsWithName = /[a-z]Attendee$/.test(actionName);
      const includesName = /[a-z]Repositories[A-Z]/.test(actionName);

      expect(endsWithName || includesName).to.be.equal(true);
    });
  });

  describe('fetchRepositories(queryValue)', () => {
    let query;

    beforeEach(() => {
      query = {};
    });

    it('returns object with type = ActionType.FETCH', () => {
      expect(
        Action.fetchRepositories({
          userName: '',
        }),
      ).to.have.property('type', ActionType.FETCH);
    });

    it('returns object with payload = { query: queryValue }', () => {
      expect(
        Action.fetchRepositories({
          userName: '',
        }),
      ).to.have.deep.property('payload', {
        userName: '',
      });
    });
  });

  describe('fetchRepositoriesFailed(error)', () => {
    it('returns object with type = ActionType.FETCH_FAILED', () => {
      const error = {};

      expect(Action.fetchRepositoriesFailed(error)).to.have.property(
        'type',
        ActionType.LOAD_LIST_FAILED,
      );
    });

    it('returns object with payload = { error }', () => {
      const error = {};

      expect(Action.fetchRepositoriesFailed(error)).to.have.deep.property(
        'payload',
        { error },
      );
    });
  });

  describe('fetchRepositoriesSuccess()', () => {
    it('returns object with type = ActionType.FETCH_SUCCESS', () => {
      expect(Action.fetchRepositoriesSuccess()).to.have.property(
        'type',
        ActionType.FETCH_SUCCESS,
      );
    });
  });

  describe('setRepositories({ id, ... })', () => {
    const repository = Repository({ id: 0 });

    it('returns object with type = ActionType.SET', () => {
      expect(Action.setRepositories([repository])).to.have.property(
        'type',
        ActionType.SET,
      );
    });

    it('returns object with payload = { repository, time }', () => {
      expect(Action.setRepositories()).to.have.deep.property(
        'payload',
        [repository],
      );
    });
  });
});
