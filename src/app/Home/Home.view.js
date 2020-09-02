// @flow
import * as React from 'react';
import classNames from 'classnames/bind';

import Cell from '../../components/Cell';
import Row from '../../components/Row';

import styles from './Home.view.scss';

/**
 * View part of Home component.
 *
 * @module App/Home/view
 */

const cls = classNames.bind(styles);

/**
 * Shape of HomeView's props.
 *
 * @memberof App/Home/view
 */

/**
 * Plain part of Home component's View.
 *
 * @returns {?React.Node} Rendered Home.
 * @memberof App/Home/view
 */
const HomeView = () => (
  <div className={cls('Home')}>
    <Row>
      <Cell>
        <h1>Main</h1>
      </Cell>
    </Row>
  </div>
);

// HomeView.defaultProps = {}

/**
 * View part of Home exported as PureComponent to prevent extra re-renders.
 *
 * @memberof App/Home/view
 */
export default HomeView;
