import { MainContentLayoutDecorator } from '@/tests/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { ChefDetail } from './ChefDetail';

const meta: Meta<typeof ChefDetail> = {
  title: 'Components/ChefDetail',
  component: ChefDetail,
  tags: ['autodocs'],
  decorators: [MainContentLayoutDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChefDetail>;

export const Primary: Story = {
  args: {
    chefData: {
      id: crypto.randomUUID(),
      name: '田中シェフ',
      description:
        '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
      recipeCount: 123,
      followCount: 300,
      image: '/assets/images/sample/chef-sample.jpeg',
    },
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
