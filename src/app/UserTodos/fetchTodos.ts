import { fetcher } from '@/features/fetcher';
import type { Todo } from '@/types';

export const fetchTodos = async (): Promise<Todo[]> => await fetcher('/todos', 60);
