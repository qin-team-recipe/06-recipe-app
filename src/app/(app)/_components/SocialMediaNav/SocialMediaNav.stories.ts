import type { Meta, StoryObj } from '@storybook/react';
import { SocialMediaNav } from './SocialMediaNav';

const meta: Meta<typeof SocialMediaNav> = {
  title: 'Components/SocialMediaNav',
  component: SocialMediaNav,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SocialMediaNav>;

export const TwoPrioritySocialMedia: Story = {
  args: {
    mediaLinks: [
      {
        href: 'aaaaa',
        type: 'instagram',
      },
      {
        href: 'aaaaa',
        type: 'tiktok',
      },
      {
        href: 'aaaaa',
        type: 'facebook',
      },
      {
        href: 'hogehoge.com',
        type: 'other',
      },
    ],
  },
};

export const OnePrioritySocialMedia: Story = {
  args: {
    mediaLinks: [
      {
        href: 'aaaaa',
        type: 'youtube',
      },
      {
        href: 'hogehoge.com',
        type: 'other',
      },
    ],
  },
};

export const NoPrioritySocialMedia: Story = {
  args: {
    mediaLinks: [
      {
        href: 'hogehoge.com',
        type: 'other',
      },
    ],
  },
};
