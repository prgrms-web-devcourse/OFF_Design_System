import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inputLabel: 'ID',
    inputType: 'text',
    placeholder: '아이디',
  },
};

Default.argTypes = {
  inputLabel: {
    control: { type: 'text' },
  },
  inputType: {
    control: {
      type: 'radio',
    },
    options: ['text', 'password'],
  },
  placeholder: {
    control: { type: 'text' },
  },
};
