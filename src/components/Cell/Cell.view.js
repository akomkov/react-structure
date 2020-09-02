// @flow
import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Cell.view.scss';

/**
* View part of Cell component.
*
* @module Component/Cell/view
*/

const cls = classNames.bind(styles);

/**
* Shape of CellView's props.
*
* @memberof Component/Cell/view
*/
export type CellViewProps = { children: ?React.Node, width?: number }

/**
* Plain part of Cell component's View.
*
* @param {CellViewProps} $1 Props passed from parent component.
* @returns {?React.Node} Rendered Cell.
* @memberof Component/Cell/view
*/
const CellView = ({ children, width = 12 }: CellViewProps) => {
  const withWidth = typeof width === 'number' && width > 0;

  return (
    <div className={cls('Cell', { [`Cell__width-${width}`]: withWidth })}>
      {children}
    </div>
  );
};

CellView.defaultProps = { width: 12 };

/**
* View part of Cell exported as PureComponent to prevent extra re-renders.
*
* @memberof Component/Cell/view
*/
export default CellView;
