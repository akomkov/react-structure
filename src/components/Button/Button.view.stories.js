// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import ButtonView from './Button.view';

const stories = storiesOf('Component/Button', module);
const buttonTypes = ['button', 'reset', 'submit'];
const defaultButtonType = 'button';
const buttonSizes = ['small', 'normal', 'big'];
const defaultButtonSize = 'normal';

stories
  .add('Button with text', () => {
    const buttonText = text('Button Text', 'Nearby 3');
    const buttonType = select('Button Type', buttonTypes, defaultButtonType);
    const buttonSize = select('Button Size', buttonSizes, defaultButtonSize);
    const isDisabled = boolean('Disabled', false);
    const isFullWidth = boolean('Full Width', false);
    const isHidden = boolean('Hidden', false);
    const isRounded = boolean('Rounded', false);
    const isSecondary = boolean('Secondary', false);
    const isTransparent = boolean('Transparent', false);
    const isWarning = boolean('isWarning', false);
    const hasBorder = boolean('Has Border', false);
    const restProps = {};

    if (buttonSize === 'small') {
      restProps.isSmall = true;
    } else if (buttonSize === 'big') {
      restProps.isBig = true;
    }

    return (
      <ButtonView
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isHidden={isHidden}
        isRounded={isRounded}
        isSecondary={isSecondary}
        isTransparent={isTransparent}
        isWarning={isWarning}
        hasBorder={hasBorder}
        onClick={() => { console.info('Button is clicked') }}
        type={buttonType}
        {...restProps}
      >
        {buttonText}
      </ButtonView>
    )
  });
