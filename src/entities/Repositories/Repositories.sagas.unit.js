import { expect } from 'chai';
import rewiremock from 'rewiremock';

import { takeLatest } from 'redux-saga/effects';

rewiremock.proxy('./Repositories.sagas.js', (mock) => ({
  './Repositories.utils': mock.with(() => require('./__mocks__/Repositories.utils')),
}));

rewiremock.inScope(() => {
  rewiremock.enable();

  const ActionType = require('./Repositories.actionTypes');
  const { fetchRepositoriesSaga, fetchRepositories } = require('./Repositories.sagas');

  describe('Entity::Repositories::sagas', () => {
    describe('fetchRepositoriesSaga', () => {
      it('takes latest FETCH action and runs fetchRepositories saga', () => {
        const saga = fetchRepositoriesSaga();
        expect(saga.next().value).to.be.deep.equal(
          takeLatest(ActionType.FETCH, fetchRepositories),
        );
      });
    });
  });

  rewiremock.disable();
});
