import { Icons } from '@/components/Icons';
import Link from 'next/link';

const PRIORITY_ORDER = ['youtube', 'instagram', 'tiktok', 'twitter', 'facebook', 'other'] as const;

type SocialMedia = (typeof PRIORITY_ORDER)[number];

type MediaLink = {
  href: string;
  type: SocialMedia;
};

type SocialMediaNavProps = {
  mediaLinks: MediaLink[];
};

export const SocialMediaNav = ({ mediaLinks }: SocialMediaNavProps) => {
  const getSocialMediaIcon = (type: SocialMedia) => {
    switch (type) {
      case 'youtube':
        return <Icons.Youtube className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
      case 'instagram':
        return <Icons.Instagram className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
      case 'tiktok':
        return <Icons.TikTok className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
      case 'twitter':
        return <Icons.Twitter className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
      case 'facebook':
        return <Icons.Facebook className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
      default:
        return <Icons.OtherLink className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />;
    }
  };

  const sortedArray = mediaLinks.sort((a, b) => {
    const currentTargetIndex = PRIORITY_ORDER.indexOf(a.type);
    const nextTargetIndex = PRIORITY_ORDER.indexOf(b.type);
    return currentTargetIndex - nextTargetIndex;
  });

  const topTwoResults = sortedArray.slice(0, 2);
  const remainingResults = sortedArray.slice(2);

  return sortedArray.length ? (
    <div className="flex flex-row items-center gap-x-3">
      {topTwoResults.map(({ href, type }, index) => (
        <Link
          key={index}
          href={href}
          className="outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7"
        >
          {getSocialMediaIcon(type)}
        </Link>
      ))}
      {remainingResults.length ? (
        <button className="outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7">
          <Icons.Detail className="h-6 w-6 stroke-mauve-12 stroke-[1.5]" />
        </button>
      ) : null}
    </div>
  ) : null;
};
