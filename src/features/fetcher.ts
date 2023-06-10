export const fetcher = async <T>(pathname: string, revalidateSpan: number): Promise<T> => {
  const hostname = 'https://jsonplaceholder.typicode.com';

  const endpoint = hostname + pathname;

  return await fetch(endpoint, { next: { revalidate: revalidateSpan } }).then(
    (res) => res.json() as T
  );
};
