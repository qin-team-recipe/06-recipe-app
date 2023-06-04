import { fetcher } from '../_features/fetcher';
import useSWR from 'swr';

export const useTodo = <T>(id: string | number, favoriteCount: number): T | null => {
  const { data, error } = useSWR<T>(`/todos/${id}?favoriteCount=${favoriteCount}`, fetcher);

  // エラーが発生した場合は例外を投げる
  if (error !== null && error !== undefined) {
    throw error;
  }

  // データが取得できなかった場合はnullを返す
  if (data === undefined) {
    return null;
  }

  return data;
};
