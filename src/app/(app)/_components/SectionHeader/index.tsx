import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
  href?: string;
};

export const SectionHeader = ({ title, href }: SectionHeaderProps) => {
  if (typeof href === 'undefined') {
    return <h3 className="px-4 text-xl font-bold text-mauve-12">{title}</h3>;
  }
  return (
    <div className="flex flex-row items-center justify-between px-4">
      <h3 className="text-xl font-bold text-mauve-12">{title}</h3>
      <Link className="text-base font-bold text-mauve-9" href={href}>
        もっとみる
      </Link>
    </div>
  );
};
