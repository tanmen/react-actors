import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {ThemeProvider} from "../providers/ThemeProvider";
import {CircleLoading} from "./CircleLoading";

export default {
  title: 'Loading/CircleLoading',
  component: CircleLoading,
};

const Template: Story = (args) => <ThemeProvider><CircleLoading {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
