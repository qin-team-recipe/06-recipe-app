import type { Meta, StoryObj } from '@storybook/react';
import { SearchSection } from '.';

const meta: Meta<typeof SearchSection> = {
  title: 'Components/SearchSection',
  component: SearchSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full overflow-hidden border-x-0 border-mauve-6 sm:max-w-md sm:border-x">
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchSection>;

export const Default: Story = {
  args: {
    isBackButton: false,
  },
};

export const SearchedNoValue: Story = {
  args: {
    isBackButton: true,
  },
};

export const Searched: Story = {
  args: {
    defaultValue: 'マルゲリータ',
    isBackButton: true,
  },
};
