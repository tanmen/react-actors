import {Story} from '@storybook/react';
import {Image, Props} from "./Image";

export default {
  title: 'Image/Image',
  component: Image,
};

const Template: Story<Props> = (args) => <Image {...args}/>;

export const Default = Template.bind({});
Default.args = {
  src: 'https://placehold.co/150x150',
  width: 150,
  height: 150,
  empty: 'https://placehold.co/150x150?text=EmptyImage'
};
