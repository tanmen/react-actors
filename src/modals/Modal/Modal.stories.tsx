import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from './Modal';

export default {
  title: 'modals/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {
    title: 'Caution!',
    text: `The dogs that live here are very fierce and dangerous.
Do not put your hands near them.
If you feed them, your data will be erased.
Are you ready?`,
    actions: [{
      text: 'OK',
      color: 'moderate'
    }, {
      text: 'NG',
      color: 'secondary'
    }]
  }
};


