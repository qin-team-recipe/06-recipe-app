import { getPageTitle } from '@/features/common/getPageTitle';

test('タイトルを引数として渡されない時', () => {
  expect(getPageTitle()).toBe('My Next Template');
});

test('タイトルを引数として渡された時', () => {
  expect(getPageTitle('Home')).toBe('Home - My Next Template');
});
