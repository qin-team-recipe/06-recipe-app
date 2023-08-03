export type Chef = {
  id: string;
  name: string;
  image?: string;
  description: string;
  recipeCount: number;
  followCount?: number;
  links?: MediaLink[];
};

export const PRIORITY_ORDER = [
  'youtube',
  'instagram',
  'tiktok',
  'twitter',
  'facebook',
  'other',
] as const;

export type SocialMedia = (typeof PRIORITY_ORDER)[number];

export type MediaLink = {
  href: string;
  type: SocialMedia;
};
