'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addFoodList, removeFoodList, updateFoodList } from './data';
import type { FoodItem } from './definitions';

const FormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required.'),
  description: z.string().min(1, 'Description is required.'),
  items: z.string(), // items will be JSON stringified
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    items?: string[];
  };
  message?: string | null;
};

export async function createFoodList(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    items: formData.get('items'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Food List.',
    };
  }

  const { title, description, items: itemsString } = validatedFields.data;
  let items: FoodItem[] = [];
  try {
    items = JSON.parse(itemsString);
  } catch (e) {
    return {
      errors: { items: ['Invalid items format.'] },
      message: 'Invalid items format. Failed to Create Food List.',
    };
  }
  
  try {
    await addFoodList({ title, description, items });
  } catch (e) {
    return { message: 'Database Error: Failed to Create Food List.' };
  }

  revalidatePath('/dashboard');
  return { message: 'Food list created successfully', ...prevState };
}

export async function updateFoodListAction(id: string, prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    items: formData.get('items'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Food List.',
    };
  }

  const { title, description, items: itemsString } = validatedFields.data;
  let items: FoodItem[] = [];
  try {
    items = JSON.parse(itemsString);
  } catch (e) {
    return {
      errors: { items: ['Invalid items format.'] },
      message: 'Invalid items format. Failed to Update Food List.',
    };
  }

  try {
    await updateFoodList(id, { title, description, items });
  } catch (e) {
    return { message: 'Database Error: Failed to Update Food List.' };
  }
  
  revalidatePath('/dashboard');
  revalidatePath(`/dashboard/lists/${id}`);
  return { message: 'Food list updated successfully', ...prevState };
}


export async function deleteFoodList(id: string) {
  try {
    await removeFoodList(id);
    revalidatePath('/dashboard');
    // redirect('/dashboard'); // Only redirect if we are on the deleted page
  } catch (e) {
    return { message: 'Database Error: Failed to Delete Food List.' };
  }
}
