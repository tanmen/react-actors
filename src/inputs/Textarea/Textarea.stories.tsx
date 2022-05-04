import {Story} from "@storybook/react";
import React from "react";
import {Textarea, TextareaProps} from "./Textarea";

export default {
  title: 'Input/Textarea',
  component: Textarea
};

export const Normal: Story<TextareaProps> = (args) => <Textarea {...args}/>;

