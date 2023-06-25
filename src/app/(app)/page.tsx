import { UserTodos } from '../UserTodos';

const Home = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <UserTodos />
    </>
  );
};

export default Home;
