import type { FoodCategory } from "@/lib/definitions";
import { Apple, Beef, Carrot, Milk, Wheat, ShoppingBasket } from 'lucide-react';
import type { LucideProps } from "lucide-react";

type FoodCategoryIconProps = LucideProps & {
  category: FoodCategory;
};

export default function FoodCategoryIcon({ category, ...props }: FoodCategoryIconProps) {
  switch (category) {
    case 'Fruit':
      return <Apple {...props} />;
    case 'Vegetable':
      return <Carrot {...props} />;
    case 'Grain':
      return <Wheat {...props} />;
    case 'Protein':
      return <Beef {...props} />;
    case 'Dairy':
      return <Milk {...props} />;
    case 'Other':
      return <ShoppingBasket {...props} />;
    default:
      return <ShoppingBasket {...props} />;
  }
}
