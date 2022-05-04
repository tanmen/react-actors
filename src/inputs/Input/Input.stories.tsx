import {Story} from "@storybook/react/types-6-0";
import React from "react";
import {Input, InputProps} from "./Input";

export default {
  title: 'Input/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

const Template: Story<InputProps> = ({...args}) => <Input {...args}/>;

export const Normal = Template.bind({});

