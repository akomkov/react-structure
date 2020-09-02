import * as React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AppViewPlain as AppView } from './App.view';

Enzyme.configure({ adapter: new Adapter() });

describe('Component::App::view', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  function renderDoc(override = {}) {
    return shallow(<AppView {...props} {...override} />);
  }

  it('does not throw an error on render', () => {
    expect(renderDoc).not.to.throw(Error);
  });
});
