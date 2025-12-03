'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deleteFoodList } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

export default function DeleteFoodListButton({ listId }: { listId: string }) {
    const { toast } = useToast();
    
  const handleDelete = async () => {
    const result = await deleteFoodList(listId);
    if (result?.message) {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.message,
        })
    } else {
        toast({
            title: "Success",
            description: "Food list deleted successfully.",
        })
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" size="sm">
          <Trash2 className="mr-2 h-4 w-4" /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            food list and all of its items.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={handleDelete}>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
