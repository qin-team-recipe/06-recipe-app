import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '.';

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Primary: Story = {
  args: {
    title: 'シェフ',
  },
};

export const Secondary: Story = {
  args: {
    title: 'シェフ',
    href: '/fav/my',
  },
};
