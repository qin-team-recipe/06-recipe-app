'use client';

import * as ScrollArea from '@radix-ui/react-scroll-area';

type HorizontalScrollAreaProps = {
  children: React.ReactNode;
};

export const HorizontalScrollArea = ({ children }: HorizontalScrollAreaProps) => {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport>{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};
