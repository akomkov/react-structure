import * as React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ButtonController } from './Button.controller';
import { ButtonView } from './Button.view';

Enzyme.configure({ adapter: new Adapter() });

describe('Component::Button::controller', function() {
  let props;

  beforeEach(function() {
    props = {}
  });

  function renderDoc(override = {}) {
    return shallow(<ButtonController {...props} {...override} />)
  }

  it('does not throw an error on render', function() {
    expect(renderDoc).not.to.throw(Error)
  })

  it('renders ButtonView only', function() {
    const doc = renderDoc()

    expect(doc.is(ButtonView)).to.be.equal(true)
  })

  it('does not pass any property with `handle` prefix into ButtonView', function() {
    const doc = renderDoc()

    expect(Object.keys(doc.props()).filter(key => /^handle[A-Z]/.test(key)).length).to.be.equal(0)
  })
});
