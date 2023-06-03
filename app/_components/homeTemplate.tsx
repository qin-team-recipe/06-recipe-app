import { Counter } from './counter';
import { UserTodos } from './userTodos';
import { Suspense } from 'react';

export const HomeTemplate: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <div className="mb-8">
        <h2>グローバルカウンター</h2>
        <Counter />
      </div>
      <h2>TODOリスト</h2>
      <Suspense fallback={<>ローディング中。。</>}>
        {/* @ts-expect-error Server Component */}
        <UserTodos />
      </Suspense>
    </div>
  );
};
