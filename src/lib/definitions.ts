export type FoodCategory = 'Fruit' | 'Vegetable' | 'Grain' | 'Protein' | 'Dairy' | 'Other';

export type FoodItem = {
  id: string;
  name: string;
  category: FoodCategory;
  quantity: number;
};

export type FoodList = {
  id: string;
  title: string;
  description: string;
  items: FoodItem[];
};
