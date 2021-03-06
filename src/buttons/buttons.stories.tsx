import {action} from "@storybook/addon-actions";
import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Button} from "./Button";

export default {
  title: 'Button',
  component: Button,
};

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Normal = Template.bind({});
export const Async = Template.bind({});
Async.args = {
  onClick: () => new Promise(resolve => setTimeout(resolve, 2000)).then(() => action('onClick'))
};
