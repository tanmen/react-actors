import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {ColorProps, ColorTable} from "./ColorTable";

export default {
  title: 'ColorTable',
  component: ColorTable,
};

const Template: Story<ColorProps> = (args) => <ColorTable {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  base: '#fff'
};
