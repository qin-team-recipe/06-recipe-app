import { MainContentLayoutDecorator } from '@/tests/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { CreateUserForm } from './CreateUserForm';

const meta: Meta<typeof CreateUserForm> = {
  title: 'Components/CreateUserForm',
  component: CreateUserForm,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [MainContentLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof CreateUserForm>;

export const Default: Story = {
  args: {
    onSubmit: (values) => {
      console.log('onSubmit', values);
    },
    onLogout: () => {
      console.log('onLogout');
    },
  },
};
