// @flow
import * as React from 'react';

import ButtonView, { type ButtonTypes, type ButtonViewProps } from './Button.view';

/**
 * Module with controller for Button component.
 *
 * @module Component/Button/controller
 */

/**
 * Shape of props for ButtonController.
 *
 * @memberof Component/Button/controller
 */
export type ButtonControllerProps = {
  children: ?React.Node,
  hasBorder?: boolean,
  isBig?: boolean,
  isDisabled?: boolean,
  isFullWidth?: boolean,
  isRounded?: boolean,
  isSecondary?: boolean,
  isSmall?: boolean,
  isHidden?: boolean,
  isTransparent?: boolean,
  isWarning?: boolean,
  onClick: ?Function,
  type?: ButtonTypes,
  id: ?string
}

/**
 * Shape of ButtonController's State.
 *
 * @memberof Component/Button/controller
 */
type ButtonControllerState = null

/**
 * Controller for Button component.
 *
 * @param {React.Node} children
 *
 * @extends React.PureComponent
 * @memberof Component/Button/controller
 */
// eslint-disable-next-line max-len
export default class ButtonController extends React.PureComponent<ButtonControllerProps, ButtonControllerState> {
  /**
   * Method to generate properties for view part of component.
   *
   * @returns {ButtonViewProps} Props for view part of component.
   * @memberof Component/Button/controller.ButtonController#
   */
  getViewProps(): ButtonViewProps {
    const {
      children,
      hasBorder,
      isBig,
      isDisabled,
      isHidden,
      isFullWidth,
      isRounded,
      isSecondary,
      isSmall,
      isTransparent,
      isWarning,
      type,
      id,
    } = this.props;

    return {
      children,
      hasBorder,
      isBig,
      isDisabled,
      isHidden,
      isFullWidth,
      isRounded,
      isSecondary,
      isSmall,
      isTransparent,
      isWarning,
      onClick: this.handleClick,
      type,
      id,
    };
  }

  /**
   * Click handler
   * @param event {SyntheticEvent}
   */
  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (typeof onClick === 'function') onClick(event);
  }

  /**
   * React's method to render component.
   *
   * Does not render something except component's view part.
   *
   * @returns {?React.Node} View part of Button or possible `null`.
   * @memberof Component/Button/controller.ButtonController#
   */
  render() {
    return React.createElement(ButtonView, this.getViewProps());
  }
}

ButtonController.defaultProps = {
  hasBorder: false,
  isBig: false,
  isDisabled: false,
  isHidden: false,
  isFullWidth: false,
  isRounded: false,
  isSecondary: false,
  isSmall: false,
  isTransparent: false,
  isWarning: false,
  type: 'button',
};
