import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from '.';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
  args: {
    tablist: [
      {
        href: `/chef/1`,
        label: 'レシピ',
      },
      {
        href: `/chef/1/link`,
        label: 'リンク',
      },
    ],
    children: '',
  },
};

export const ThreeTabs: Story = {
  args: {
    tablist: [
      {
        href: `/chef/1`,
        label: '作り方',
      },
      {
        href: `/chef/1/link`,
        label: '材料',
      },
      {
        href: `/chef/1/link`,
        label: 'リンク',
      },
    ],
    children: '',
  },
};
