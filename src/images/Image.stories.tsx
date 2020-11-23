import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Image, Props} from "./Image";

export default {
  title: 'Image',
  component: Image,
};

const Template: Story<Props> = (args) => <Image {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://placehold.jp/150x150.png',
  width: 100,
  height: 100,
  empty: 'https://placehold.jp/150x150.png?text=EmptyImage'
};
