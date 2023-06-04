import { ENV } from '../_constants/env';
import { isString } from './typeGuards';

export const fetcher = async <T>(pathname: string, revalidateSpan: number = 10): Promise<T> => {
  const hostname: string | undefined = ENV.API_HOST;

  // ホスト名が文字列でない場合は例外を投げる
  if (!isString(hostname)) throw new Error('hostname is not string');

  const endpoint = hostname + pathname;

  return await fetch(endpoint, { next: { revalidate: revalidateSpan } }).then(
    (res) => res.json() as T
  );
};
