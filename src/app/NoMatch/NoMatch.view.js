// @flow
import * as React from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import styles from './NoMatch.view.scss';

/**
 * View part of NoMatch component.
 *
 * @module App/NoMatch/view
 */

const cls = classNames.bind(styles);

/**
 * Shape of NoMatchView's props.
 *
 * @memberof App/NoMatch/view
 */

/**
 * Plain part of NoMatch component's View.
 *
 * @returns {?React.Node} Rendered NoMatch.
 * @memberof App/NoMatch/view
 */
const NoMatchView = () => {
  const location = useLocation();

  return (
    <div className={cls('NoMatch')}>
      <h2>
        {location.pathname}
        is not found
      </h2>
      <Link to="/">Home</Link>
    </div>
  );
};

// NoMatchView.defaultProps = {};

/**
 * View part of NoMatch exported as PureComponent to prevent extra re-renders.
 *
 * @memberof App/NoMatch/view
 */
export default NoMatchView;
