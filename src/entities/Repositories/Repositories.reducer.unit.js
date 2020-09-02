import { expect } from 'chai';
import * as Immutable from 'immutable';

import * as ActionType from './Repositories.actionTypes';
import { Repository } from './Repositories.record';
import repositoryReducer from './Repositories.reducer';

describe('Entity::Repositories::reducer', () => {
  it('is function', () => {
    expect(typeof repositoryReducer).to.be.equal('function');
  });

  it('throws in case of missed action and state', () => {
    expect(repositoryReducer).to.throw(Error);
  });

  it('throws in case of missed action', () => {
    expect(() => repositoryReducer(null)).to.throw(Error);
  });

  it('does not throw in case of existed action and state', () => {
    expect(() => repositoryReducer(null, {})).not.to.throw(Error);
  });

  it('returns the same state as passed in case of unknown action', () => {
    const state = Immutable.fromJS({});

    expect(repositoryReducer(state, { type: 'UNKNOWN' })).to.be.equal(state);
  });

  it('returns immutable state in case of passed state = undefined', () => {
    const state = repositoryReducer(undefined, { type: 'UNKNOWN' });

    expect(Immutable.isImmutable(state)).to.be.equal(true);
  });

  it('returns immutable record in case of passed state = undefined', () => {
    const state = repositoryReducer(undefined, { type: 'UNKNOWN' });

    expect(Immutable.Record.isRecord(state)).to.be.equal(true);
  });

  describe('on FETCH action', () => {
    it('sets listLoading into true', () => {
      const state = repositoryReducer(undefined, { type: ActionType.FETCH });
      expect(state.get('isLoading')).to.be.equal(true);
    });
  });

  describe('on LOAD_LIST_SUCCESS action', () => {
    it('sets listLoading into false', () => {
      const state = repositoryReducer(undefined, {
        type: ActionType.FETCH_SUCCESS,
      });
      expect(state.get('isLoading')).to.be.equal(false);
    });
  });

  describe('on LOAD_LIST_FAILED action', () => {
    it('sets listLoading into false', () => {
      const state = repositoryReducer(undefined, {
        type: ActionType.FETCH_FAILED,
      });
      expect(state.get('isLoading')).to.be.equal(false);
    });
  });

  describe('on SET action', () => {
    let repository;

    beforeEach(() => {
      repository = Repository({ id: 0 });
    });

    it('sets instance into entities', () => {
      const state = repositoryReducer(undefined, {
        type: ActionType.SET,
        payload: [repository],
      });

      expect(state.getIn(['map', 0])).to.be.equal(
        repository,
      );
    });
  });
});
