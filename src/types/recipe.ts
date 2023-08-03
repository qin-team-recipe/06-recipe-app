export type Recipe = {
  id: string;
  name: string;
  description: string;
  image?: string;
  favorite: number;
  material?: RecipeMaterial[];
  createdBy?: string;
};

export type RecipeMaterial = {
  body: string;
};
