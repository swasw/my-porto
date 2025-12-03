'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle, Save, Trash2, LoaderCircle } from 'lucide-react';
import type { FoodList, FoodCategory } from '@/lib/definitions';
import { createFoodList, updateFoodListAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

const foodItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Item name is required.'),
  category: z.enum(['Fruit', 'Vegetable', 'Grain', 'Protein', 'Dairy', 'Other']),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1.'),
});

const foodListSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Description is required.'),
  items: z.array(foodItemSchema),
});

const foodCategories: FoodCategory[] = ['Fruit', 'Vegetable', 'Grain', 'Protein', 'Dairy', 'Other'];

type FoodListFormProps = {
  foodList?: FoodList;
  closeDialog: () => void;
};

export default function FoodListForm({ foodList, closeDialog }: FoodListFormProps) {
  const isEditMode = !!foodList;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof foodListSchema>>({
    resolver: zodResolver(foodListSchema),
    defaultValues: {
      id: foodList?.id || undefined,
      title: foodList?.title || '',
      description: foodList?.description || '',
      items: foodList?.items || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const formAction = isEditMode ? updateFoodListAction.bind(null, foodList.id) : createFoodList;
  const [state, dispatch] = useFormState(formAction, { message: null, errors: {} });

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      } else {
        toast({
          title: "Success",
          description: state.message,
        });
        closeDialog();
      }
    }
  }, [state, toast, closeDialog]);

  function onSubmit(values: z.infer<typeof foodListSchema>) {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('items', JSON.stringify(values.items));
    dispatch(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>List Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Weekly Groceries" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A short description of your food list." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-4">
            <h3 className="text-lg font-medium font-headline">Food Items</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
            {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-12 gap-2 items-start p-3 border rounded-lg relative">
                    <div className="col-span-12 sm:col-span-5">
                         <FormField
                            control={form.control}
                            name={`items.${index}.name`}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Item Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Item name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                         <FormField
                            control={form.control}
                            name={`items.${index}.category`}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {foodCategories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                        <FormField
                            control={form.control}
                            name={`items.${index}.quantity`}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Quantity</FormLabel>
                                <FormControl>
                                <Input type="number" placeholder="Qty" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-2 flex items-center justify-end h-10">
                        <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                    </div>
                </div>
            ))}
            </div>
            <Button
                type="button"
                variant="outline"
                onClick={() => append({ id: `new-${Date.now()}`, name: '', category: 'Other', quantity: 1 })}
            >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Item
            </Button>
        </div>

        <div className="flex justify-end">
          <SubmitButton isEditMode={isEditMode} />
        </div>
      </form>
    </Form>
  );
}

function SubmitButton({ isEditMode }: { isEditMode: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Save className="mr-2 h-4 w-4" />
      )}
      {isEditMode ? 'Save Changes' : 'Create List'}
    </Button>
  );
}
