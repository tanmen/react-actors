import {Story} from '@storybook/react';
import {BackgroundImage, BackgroundImageProps} from "./BackgroundImage";

export default {
  title: 'Image/BackgroundImage',
  component: BackgroundImage,
};

const Template: Story<BackgroundImageProps> = (args) => <BackgroundImage {...args}/>;

export const Default = Template.bind({});
Default.args = {
  src: 'https://placehold.co/250x150',
  empty: 'https://placehold.co/250x150?text=EmptyImage',
  children: <div style={{width: '150px', height: '150px', backgroundColor: "red"}}>
    Test
  </div>
};
