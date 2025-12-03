import { getFoodLists } from '@/lib/data';
import FoodListCard from '@/components/food/food-list-card';

export default async function DashboardPage() {
  const foodLists = await getFoodLists();

  return (
    <>
      {foodLists.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no food lists
            </h3>
            <p className="text-sm text-muted-foreground">
              Get started by creating a new food list.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foodLists.map((list) => (
            <FoodListCard key={list.id} foodList={list} />
          ))}
        </div>
      )}
    </>
  );
}
