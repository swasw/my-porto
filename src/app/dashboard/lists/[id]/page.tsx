import { getFoodList } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FoodItemsTable from '@/components/food/food-items-table';
import EditFoodList from '@/components/food/edit-food-list';

export default async function FoodListDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const foodList = await getFoodList(params.id);

  if (!foodList) {
    notFound();
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1.5">
          <CardTitle className="font-headline text-2xl">{foodList.title}</CardTitle>
          <CardDescription>{foodList.description}</CardDescription>
        </div>
        <EditFoodList foodList={foodList} />
      </CardHeader>
      <CardContent>
        <FoodItemsTable items={foodList.items} />
      </CardContent>
    </Card>
  );
}
