// @flow
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import CellView from './Cell.view'

const stories = storiesOf('Component/Cell', module)

stories.add('default', () => <CellView>Cell View works!</CellView>)
