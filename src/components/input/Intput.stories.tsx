import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inputLabel: '',
    inputType: 'text',
    placeholder: '',
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

export const Id: Story = {
  args: {
    inputLabel: 'ID',
    inputType: 'text',
    placeholder: '아이디',
  },
};

Id.argTypes = {
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

export const Password: Story = {
  args: {
    inputLabel: 'PASSWORD',
    inputType: 'password',
    placeholder: '비밀번호',
  },
};

Password.argTypes = {
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
