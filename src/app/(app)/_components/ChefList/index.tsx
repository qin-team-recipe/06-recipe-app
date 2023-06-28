import { ChefListItem, ChefListItemVariant } from '../ChefListItem';

type ChefListProps = {
  type?: ChefListItemVariant;
};

// TODO:ダミーデータ & プロパティも適当なので削除する
const dummyChefData = [
  {
    id: '1',
    name: '山田シェフ',
  },
  {
    id: '2',
    name: '山本シェフ',
  },
  {
    id: '3',
    name: '佐々木シェフ',
  },
  {
    id: '4',
    name: 'ピエールシェフ',
  },
  {
    id: '5',
    name: '田中シェフ',
  },
  {
    id: '6',
    name: '名前が長めのシェフ',
  },
];

export const ChefList = ({ type = { shape: 'rectangle' } }: ChefListProps) => {
  return (
    <div className="flex flex-row gap-x-4 px-4">
      {dummyChefData.map(({ id, name }) => (
        <ChefListItem type={type} key={id} id={id} name={name} />
      ))}
    </div>
  );
};
