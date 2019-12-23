import {action} from "@storybook/addon-actions";
import {boolean, select, text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {AsyncButton, Button, SizeType} from "../src/buttons";
import ThemeProvider from "../src/providers/ThemeProvider";
import {color} from "./data/color";

const size = () => select('size', {Normal: SizeType.Normal, Large: SizeType.Large, Small: SizeType.Small},
  SizeType.Normal);
const disabled = () => boolean('disabled', false);
storiesOf('Buttons', module)
  .add('Button', () =>
    <ThemeProvider>
      <Button
        size={size()}
        color={color()}
        disabled={disabled()}
        onClick={action('onClick')}>
        {text('text', 'Button')}
      </Button>
    </ThemeProvider>)
  .add('AsyncButton', () =>
    <ThemeProvider>
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
      </AsyncButton>
    </ThemeProvider>);
