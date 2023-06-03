export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todoDefault: Todo = {
  userId: 0,
  id: 0,
  title: '',
  completed: false,
};
