import {Story} from "@storybook/react";
import React from "react";
import {ConfirmModal, ConfirmModalProps} from "./ConfirmModal";

export default {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default: Story<ConfirmModalProps> = (args) => <ConfirmModal {...args}/>
Default.args = {
  title: 'Are you sure?',
  text: 'Do you really want to delete these records? This process cannot be undone.'
}

