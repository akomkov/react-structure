import { expect } from 'chai';

import { RepositoriesStateRecord } from './Repositories.reducer';
import * as Selector from './Repositories.selectors';

describe('Conference::Entity::Repositories::selectors', () => {
  Object.entries(Selector)
    .filter(([key]) => key.startsWith('select'))
    .forEach(([key, select]) => {
      describe(key, () => {
        it('does not throw on any selector on default state', () => {
          expect(() => select(RepositoriesStateRecord(), 0)).not.to.throw(Error);
        });
      });
    });
});
