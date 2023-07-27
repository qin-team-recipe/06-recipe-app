import { Args, PartialStoryFn } from '@storybook/csf';
import { ReactRenderer } from '@storybook/react';

export const MainContentLayoutDecorator = (Story: PartialStoryFn<ReactRenderer, Args>) => (
  <div className="w-full overflow-hidden border-x-0 border-mauve-6 sm:max-w-md sm:border-x">
    <Story />
  </div>
);
