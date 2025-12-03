import type { FoodList } from './definitions';

// In-memory store for food lists
let foodLists: FoodList[] = [
  {
    id: '1',
    title: 'Weekly Groceries',
    description: 'Essential items for the upcoming week.',
    items: [
      { id: '1-1', name: 'Apples', category: 'Fruit', quantity: 6 },
      { id: '1-2', name: 'Chicken Breast', category: 'Protein', quantity: 2 },
      { id: '1-3', name: 'Milk', category: 'Dairy', quantity: 1 },
      { id: '1-4', name: 'Whole Wheat Bread', category: 'Grain', quantity: 1 },
    ],
  },
  {
    id: '2',
    title: 'Pantry Stock-up',
    description: 'Non-perishable items to restock the pantry.',
    items: [
      { id: '2-1', name: 'Canned Tomatoes', category: 'Vegetable', quantity: 4 },
      { id: '2-2', name: 'Pasta', category: 'Grain', quantity: 3 },
      { id: '2-3', name: 'Olive Oil', category: 'Other', quantity: 1 },
    ],
  },
  {
    id: '3',
    title: 'BBQ Party',
    description: 'Supplies for the weekend barbecue.',
    items: [
      { id: '3-1', name: 'Burgers', category: 'Protein', quantity: 8 },
      { id: '3-2', name: 'Buns', category: 'Grain', quantity: 8 },
      { id: '3-3', name: 'Lettuce', category: 'Vegetable', quantity: 1 },
      { id: '3-4', name: 'Cheddar Cheese', category: 'Dairy', quantity: 1 },
    ],
  },
];

// Simulate API latency
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getFoodLists = async () => {
  await wait(500);
  return foodLists;
};

export const getFoodList = async (id: string) => {
  await wait(500);
  const list = foodLists.find((list) => list.id === id);
  if (!list) {
    return null;
  }
  return list;
};

export const addFoodList = async (list: Omit<FoodList, 'id'>) => {
  await wait(1000);
  const newList = { ...list, id: Date.now().toString() };
  foodLists = [newList, ...foodLists];
  return newList;
};

export const updateFoodList = async (id: string, updatedList: Partial<FoodList>) => {
  await wait(1000);
  let listToUpdate = foodLists.find((list) => list.id === id);
  if (listToUpdate) {
    Object.assign(listToUpdate, { ...updatedList, id });
    return listToUpdate;
  }
  return null;
};

export const removeFoodList = async (id: string) => {
  await wait(1000);
  const initialLength = foodLists.length;
  foodLists = foodLists.filter((list) => list.id !== id);
  return foodLists.length < initialLength;
};
