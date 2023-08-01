import { MainContentLayoutDecorator } from '@/tests/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { RecipeDetail } from '.';

const meta: Meta<typeof RecipeDetail> = {
  title: 'Components/Recipe/RecipeDetail',
  component: RecipeDetail,
  tags: ['autodocs'],
  decorators: [MainContentLayoutDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof RecipeDetail>;

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
      links: [
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
    recipeData: {
      id: crypto.randomUUID(),
      name: 'グラタングラタングラタングラタングラタン',
      description:
        'はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。',
      favorite: 100,
      image: '/assets/images/sample/chef-sample.jpeg',
      createdBy: crypto.randomUUID(),
    },
  },
};
