import * as React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { HomeViewPlain as HomeView } from './Home.view'

Enzyme.configure({ adapter: new Adapter() })

describe('Component::Home::view', function() {
  let props

  beforeEach(function() {
    props = {}
  })

  function renderDoc(override = {}) {
    return shallow(<HomeView {...props} {...override} />)
  }

  it('does not throw an error on render', function() {
    expect(renderDoc).not.to.throw(Error)
  })
})
