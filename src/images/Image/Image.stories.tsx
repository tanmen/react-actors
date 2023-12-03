import {Story} from '@storybook/react';
import {Image, ImageProps} from "./Image";

export default {
  title: 'Image/Image',
  component: Image,
};

const Template: Story<ImageProps> = (args) => <Image {...args}/>;

export const Default = Template.bind({});
Default.args = {
  src: 'https://placehold.co/150x150',
  width: 150,
  height: 150,
  empty: 'https://placehold.co/150x150?text=EmptyImage'
};
