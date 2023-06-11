import { UserTodo } from './UserTodo';
import { fetchTodos } from './fetchTodos';

export const UserTodos = async () => {
  const todos = await fetchTodos();

  // DEBUG: 3秒待ってから表示する
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(3000);

  return (
    <>
      {todos?.map((todo) => {
        return <UserTodo key={todo.id} data={todo} />;
      })}
    </>
  );
};
