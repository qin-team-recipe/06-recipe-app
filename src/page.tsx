import { UserTodos } from './app/UserTodos';

const Home = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <UserTodos />
    </>
  );
};

export default Home;
