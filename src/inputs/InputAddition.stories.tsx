import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {ThemeProvider} from "../providers/ThemeProvider";
import {InputAddition} from "./InputAddition";

export default {
  title: 'Input/InputAddition',
  component: InputAddition,
};

const Template: Story = (args) => <ThemeProvider><InputAddition {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
Normal.args = {
  children: '$'
};
