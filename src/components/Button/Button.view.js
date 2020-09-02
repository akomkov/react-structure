// @flow
import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.view.scss';

/**
 * View part of Button component.
 *
 * @module Component/Button/view
 */

// Use css-modules.
// This allows to use `cls('Button') that returns styles.Button's value that is real className.
const cls = classNames.bind(styles);

/**
 * Shape of ButtonView's props.
 *
 * @memberof Component/Button/view
 */
export type ButtonTypes = 'button' | 'reset' | 'submit'

/**
 * Shape of ButtonView's props.
 *
 * @memberof Component/Button/view
 */
export type ButtonViewProps = {
  children: ?React.Node,
  hasBorder: boolean,
  isBig: boolean,
  isDisabled: boolean,
  isHidden: boolean,
  isFullWidth: boolean,
  isRounded: boolean,
  isSecondary: boolean,
  isSmall: boolean,
  isTransparent: boolean,
  isWarning: boolean,
  onClick: Function,
  type: ButtonTypes,
}

/**
 * Plain part of Button component's View.
 *
 * @param {ButtonViewProps} $1 Props passed from parent component.
 * @returns {?React.Node} Rendered Button.
 * @memberof Component/Button/view
 */
const ButtonView = ({
  children, hasBorder, isBig, isDisabled, isHidden, isFullWidth, isRounded, isSecondary, isSmall,
  isTransparent, isWarning, onClick, type,
}: ButtonViewProps) => {
  if (isHidden) return null;
  const className = cls('Button', {
    Button_big: isBig,
    'Button_full-width': isFullWidth,
    Button_rounded: isRounded,
    Button_secondary: isSecondary,
    Button_small: isSmall,
    Button_transparent: isTransparent,
    Button_warning: isWarning,
    'Button_with-border': hasBorder,
  });

  return (
    // todo remove this exception
    // eslint-disable-next-line react/button-has-type
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

/**
 * View part of Button exported as PureComponent to prevent extra re-renders.
 *
 * @memberof Component/Button/view
 */
export default ButtonView;
