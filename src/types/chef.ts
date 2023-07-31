export type Chef = {
  id: string;
  name: string;
  image?: string;
  description: string;
  recipeCount: number;
  followCount?: number;
};
