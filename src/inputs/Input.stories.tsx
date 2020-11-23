import {Story} from "@storybook/react/types-6-0";
import React from "react";
import Input, {Props} from "./Input";

export default {
  title: 'Input/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

const Template: Story<Props> = ({...args}) => <Input {...args}/>;

export const Normal = Template.bind({});

