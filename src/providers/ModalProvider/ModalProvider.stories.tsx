import type {Meta, StoryObj} from '@storybook/react';
import {FC} from "react";
import {Button} from "../../buttons";
import {useModal} from "../../hooks/useModal";
import {ModalProps} from "../../modals";
import {Default as ModalDefault} from '../../modals/Modal/Modal.stories';
import {ModalProvider} from './ModalProvider';

export default {
  title: 'providers/ModalProvider',
  component: ModalProvider,
} as Meta<typeof ModalProvider>;

const Click: FC = () => {
  const {show} = useModal();
  return <div>
    <Button onClick={() => show(ModalDefault.args as ModalProps)}>Click Me</Button>
  </div>;
};
export const Default: StoryObj<typeof ModalProvider> = {
  args: {
    children: <Click/>
  }
};
