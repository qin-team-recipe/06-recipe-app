import Image from 'next/image';

export const AppleSignInButton = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log('foo');
        }}
        className={
          'inline-flex items-center rounded-lg bg-mauve-12 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-mauve-12/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-12/50 dark:hover:bg-mauve-12/30 dark:focus-visible:ring-mauve-12/50'
        }
      >
        <Image
          src={'/assets/icon/signIn/appleIcon.svg'}
          alt="googleアイコン"
          width={16}
          height={16}
          className="mr-4"
        />
        Apple ログイン
      </button>
    </>
  );
};
