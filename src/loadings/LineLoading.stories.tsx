import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import ThemeProvider from "../providers/ThemeProvider";
import {StyleProps} from "../types/StyleProps";
import {LineLoading} from "./LineLoading";

export default {
  title: 'Loading/LineLoading',
  component: LineLoading,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
};

const Template: Story<StyleProps> = (args) => <ThemeProvider><LineLoading {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
