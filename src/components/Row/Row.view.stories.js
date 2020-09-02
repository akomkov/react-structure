// @flow
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import RowView from './Row.view'

const stories = storiesOf('Component/Row', module)

stories.add('default', () => <RowView>Row View works!</RowView>)
