import {Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Input} from "../Input/Input";
import {InputAddition} from "./InputAddition";
import {InputGroup} from "./InputGroup";

export default {
  title: 'Input/InputGroup',
  component: InputGroup,
};

export const AdditionInput: Story = (args) => <InputGroup {...args}>
  <InputAddition>$</InputAddition>
  <Input/>
</InputGroup>;

export const DoubleAdditionInput: Story = (args) => <InputGroup {...args}>
  <InputAddition>🇺🇸</InputAddition>
  <InputAddition>$</InputAddition>
  <Input/>
</InputGroup>;

export const SuffixAdditionInput: Story = (args) => <InputGroup {...args}>
  <Input/>
  <InputAddition>円</InputAddition>
</InputGroup>;

export const DoubleAdditionDoubleInput: Story = (args) => <InputGroup {...args}>
  <InputAddition>🇺🇸</InputAddition>
  <InputAddition>$</InputAddition>
  <Input/>
  <InputAddition>🇯🇵</InputAddition>
  <Input/>
  <InputAddition>円</InputAddition>
</InputGroup>;
