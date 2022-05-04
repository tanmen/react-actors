import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {StyleProps} from "../../types";
import {SkeletonLoading} from "./SkeletonLoading";

export default {
  title: 'Loading/SkeletonLoading',
  component: SkeletonLoading,
  argTypes: {style: {control: 'object'}},
};

const Template: Story<StyleProps> = (args) => <SkeletonLoading {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  style: {
    width: '10em',
    height: '10em',
  }
}
