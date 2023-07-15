import type { Meta, StoryObj } from '@storybook/react';
import { TwoTab } from '.';

const meta: Meta<typeof TwoTab> = {
  title: 'Components/TwoTab',
  component: TwoTab,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TwoTab>;

export const Default: Story = {
  args: {
    tablist: [
      {
        tabValue: 1,
        href: `/chef/1`,
        label: 'レシピ',
      },
      {
        tabValue: 2,
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
        tabValue: 1,
        href: `/chef/1`,
        label: '作り方',
      },
      {
        tabValue: 2,
        href: `/chef/1/link`,
        label: '材料',
      },
      {
        tabValue: 3,
        href: `/chef/1/link`,
        label: 'リンク',
      },
    ],
    children: '',
  },
};
