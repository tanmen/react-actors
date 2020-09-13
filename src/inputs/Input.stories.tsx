import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import ThemeProvider from "../providers/ThemeProvider";
import Input from "./Input";

export default {
  title: 'Input/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

const Template: Story = (args) => <ThemeProvider><Input {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
