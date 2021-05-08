import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {ThemeProvider} from "../providers/ThemeProvider";
import {StyleProps} from "../types/StyleProps";
import {SkeletonLoading} from "./SkeletonLoading";

export default {
  title: 'Loading/SkeletonLoading',
  component: SkeletonLoading,
  argTypes: {style: {control: 'object'}},
};

const Template: Story<StyleProps> = (args) => <ThemeProvider><SkeletonLoading {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
Normal.args = {
  style: {
    width: '1em',
    height: '1em',
  }
}
