import Link from 'next/link';
import type { FoodList } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import DeleteFoodListButton from './delete-food-list-button';
import FoodCategoryIcon from './food-category-icon';

export default function FoodListCard({ foodList }: { foodList: FoodList }) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="font-headline">{foodList.title}</CardTitle>
        <CardDescription>{foodList.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-2">Includes:</p>
          <div className="flex flex-wrap gap-2">
            {foodList.items.slice(0, 5).map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 bg-muted p-1.5 rounded-md">
                <FoodCategoryIcon category={item.category} className="h-4 w-4" />
                <span className="text-xs">{item.name}</span>
              </div>
            ))}
             {foodList.items.length > 5 && (
                <div className="flex items-center gap-1.5 bg-muted p-1.5 rounded-md">
                    <span className="text-xs">...and {foodList.items.length - 5} more</span>
                </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/lists/${foodList.id}`}>
            <Eye className="mr-2 h-4 w-4" /> View
          </Link>
        </Button>
        <DeleteFoodListButton listId={foodList.id} />
      </CardFooter>
    </Card>
  );
}
