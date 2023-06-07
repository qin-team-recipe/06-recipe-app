import { HomeTemplate } from './_components/homeTemplate';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/chefs', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HomePage = async () => {
  const data = await getData();

  return (
    <>
      {data.chefs.map((chef: any) => {
        return <div key={chef.id}>{chef.name}</div>;
      })}

      {/* TODO タイトルやメタディスクリプション(13.4の新機能がある) */}
      <HomeTemplate />
    </>
  );
};

export default HomePage;
