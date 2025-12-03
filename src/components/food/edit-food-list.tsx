'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Pencil } from 'lucide-react';
import FoodListForm from './food-list-form';
import type { FoodList } from '@/lib/definitions';

export default function EditFoodList({ foodList }: { foodList: FoodList }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          Edit List
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Edit Food List</DialogTitle>
          <DialogDescription>
            Update the details of your food list below.
          </DialogDescription>
        </DialogHeader>
        <FoodListForm foodList={foodList} closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
