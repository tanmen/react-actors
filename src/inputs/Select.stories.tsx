import {Story} from "@storybook/react/types-6-0";
import React from "react";
import {Input} from "./Input";
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

const Template: Story<SelectProps> = ({...args}) => <>
  <Select {...args}>
    <option value="JP">gpt</option>
    <option value="US">United State</option>
    <option value="Other">Other</option>
  </Select>
  <Input/>
</>;

export const Normal = Template.bind({});

