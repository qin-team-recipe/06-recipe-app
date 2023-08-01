export type Recipe = {
  id: string;
  name: string;
  description: string;
  favorite: number;
  material?: RecipeMaterial[];
};

export type RecipeMaterial = {
  body: string;
};
