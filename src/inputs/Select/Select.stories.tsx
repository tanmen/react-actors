import {Story} from "@storybook/react/types-6-0";
import React from "react";
import {Select, SelectProps} from "./Select";

export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};

const Template: Story<SelectProps> = ({...args}) =>
  <Select {...args}>
    <option value="JP">Japan</option>
    <option value="US">United State</option>
    <option value="Other">Other</option>
  </Select>;

export const Normal = Template.bind({});

