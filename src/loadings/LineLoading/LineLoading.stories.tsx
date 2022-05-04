import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {StyleProps} from "../../types";
import {LineLoading} from "./LineLoading";

export default {
  title: 'Loading/LineLoading',
  component: LineLoading,
};

const Template: Story<StyleProps> = (args) => <LineLoading {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  style: {
    fontSize: '10em'
  }
}
