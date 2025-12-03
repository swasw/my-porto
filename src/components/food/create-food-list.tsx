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
import { PlusCircle } from 'lucide-react';
import FoodListForm from './food-list-form';

export default function CreateFoodList() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create List
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Create New Food List</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new list. You can add food items now or later.
          </DialogDescription>
        </DialogHeader>
        <FoodListForm closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
