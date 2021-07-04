import {Story} from "@storybook/react";
import React from "react";
import {ModalBackground, ModalBackgroundProps} from "./ModalBackground";

export default {
  title: 'Modal/ModalBackground',
  component: ModalBackground,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default: Story<ModalBackgroundProps> = (args) => <ModalBackground {...args}/>

