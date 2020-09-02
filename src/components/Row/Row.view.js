// @flow
import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Row.view.scss';

/**
* View part of Row component.
*
* @module Component/Row/view
*/

const cls = classNames.bind(styles);

/**
* Shape of RowView's props.
*
* @memberof Component/Row/view
*/
export type RowViewProps = { children: ?React.Node }

/**
* Plain part of Row component's View.
*
* @param {RowViewProps} $1 Props passed from parent component.
* @returns {?React.Node} Rendered Row.
* @memberof Component/Row/view
*/
const RowView = ({ children }: RowViewProps) => (
  <div className={cls('Row')}>
    {children}
  </div>
);

// RowView.defaultProps = {}

/**
* View part of Row exported as PureComponent to prevent extra re-renders.
*
* @memberof Component/Row/view
*/
export default RowView;
