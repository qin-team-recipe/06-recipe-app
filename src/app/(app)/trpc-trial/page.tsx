'use client';

import { trpc } from 'libs/trpc';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const TrpcTrialPage = () => {
  const [userName, setUserName] = useState('');

  const { data: session } = useSession();

  if (!session) return <div>ログインしてください</div>;

  // getUserByEmail を呼び出す
  const getUserByEmailQuery = trpc.user.getUserByUserId.useQuery({ userId: session.user.id });

  const getUser = async () => {
    const { data: user } = await getUserByEmailQuery;
    setUserName(user?.name ?? '');
  };

  return (
    <div className="mt-12 flex flex-col">
      <button
        onClick={getUser}
        className="mx-auto mb-4 w-40 items-center rounded-lg bg-blue-10 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-blue-10/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-10/50 dark:focus-visible:ring-blue-10/50"
      >
        ユーザー名取得
      </button>
      <div className="mx-auto">ユーザー名：{userName}</div>
    </div>
  );
};

export default TrpcTrialPage;
