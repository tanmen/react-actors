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

const Template: Story<SelectProps> = ({...args}) => <Select {...args}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</Select>;

export const Normal = Template.bind({});

