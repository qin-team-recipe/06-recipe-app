import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from '.';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
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

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    image: '/assets/images/sample/chef-sample.jpeg',
  },
};
