import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import ThemeProvider from "../providers/ThemeProvider";
import {Image} from "./Image";

export default {
  title: 'Image',
  component: Image,
};

const Template: Story = (args) => <ThemeProvider><Image {...args}/></ThemeProvider>;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://placehold.jp/150x150.png',
  width: 100,
  height: 100,
  empty: 'https://placehold.jp/150x150.png?text=EmptyImage'
};
