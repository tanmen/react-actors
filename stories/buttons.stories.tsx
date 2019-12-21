import {action} from "@storybook/addon-actions";
import {boolean, select, text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {AsyncButton, Button, ColorType, SizeType} from "../src/buttons";

const size = () => select('size', {Normal: SizeType.Normal, Large: SizeType.Large, Small: SizeType.Small}, SizeType.Normal);
const color = () => select('color', {
  Primary: ColorType.Primary,
  Secondary: ColorType.Secondary,
  Success: ColorType.Success
}, ColorType.Primary);
const disabled =() => boolean('disabled', false);
storiesOf('Buttons', module)
  .add('Button', () =>
    <Button
      size={size()}
      color={color()}
      disabled={disabled()}
      onClick={action('onClick')}>
      {text('text', 'Button')}
    </Button>)
  .add('AsyncButton', () =>
    <AsyncButton
      size={size()}
      color={color()}
      disabled={disabled()}
      onClick={() => new Promise(resolve => {
        setTimeout(() => {
          resolve('onClick')
        }, 1000)
      })}>
      {text('text', 'AsyncButton')}
    </AsyncButton>);
