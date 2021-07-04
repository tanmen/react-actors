import {Story} from "@storybook/react";
import React from "react";
import {Modal, ModalProps} from "./Modal";

export default {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default: Story<ModalProps> = (args) => <Modal {...args}>
  Modal
</Modal>

