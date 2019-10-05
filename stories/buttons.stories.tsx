import {action} from "@storybook/addon-actions";
import {boolean, text} from "@storybook/addon-knobs";
import {storiesOf} from '@storybook/react';
import * as React from "react";
import {AsyncButton, Button} from "../src/buttons";

storiesOf('Buttons', module)
  .add('Button', () =>
    <Button disabled={boolean('disabled', false)}
            onClick={action('onClick')}>
      {text('text', 'Button')}
    </Button>)
  .add('AsyncButton', () =>
    <AsyncButton
      disabled={boolean('disabled', false)}
      onClick={() => new Promise(resolve => {
        setTimeout(() => {
          resolve('onClick')
        }, 1000)
      })}>
      {text('text', 'Button')}
    </AsyncButton>);
