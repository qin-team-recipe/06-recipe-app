import type { NextPage } from 'next';
import { GoogleButton } from './GoogleButton';

const SignInPage: NextPage = (): JSX.Element => {
  return (
    <>
      <h1>SignInページ</h1>
      <p>Googleアカウントにて認証を行なってください。</p>
      <GoogleButton />
    </>
  );
};

export default SignInPage;
