import * as React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NoMatchViewPlain as NoMatchView } from './NoMatch.view'

Enzyme.configure({ adapter: new Adapter() })

describe('Component::NoMatch::view', function() {
  let props

  beforeEach(function() {
    props = {}
  })

  function renderDoc(override = {}) {
    return shallow(<NoMatchView {...props} {...override} />)
  }

  it('does not throw an error on render', function() {
    expect(renderDoc).not.to.throw(Error)
  })
})
