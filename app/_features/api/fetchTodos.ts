import { fetcher } from '../../_common/_features/fetcher';
import { type Todo } from '@/_types/todo';

export const fetchTodos = async (): Promise<Todo[]> => await fetcher('/todos');
