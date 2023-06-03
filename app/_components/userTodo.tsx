'use client';

import { useTodo } from '../_common/_hooks/useTodo';
import { type Todo } from '@/_types/todo';
import { type FC } from 'react';

type Props = {
  id: number;
};

export const UserTodo: FC<Props> = (props: Props): JSX.Element => {
  const todo = useTodo<Todo>(props.id, 1);

  return (
    <div className="pl-4">
      <div>{todo != null ? `${todo.id}: ${todo.title}` : ''}</div>
    </div>
  );
};
