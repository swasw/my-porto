import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Utensils, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-5xl font-bold font-headline text-white text-center animate-fade-in-down">
        What would you like to do?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link href="/dashboard" className="w-full h-full">
          <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out text-center">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Food Lists</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center justify-center gap-4">
               <Utensils className="h-24 w-24 text-primary" />
               <p className="text-muted-foreground">Manage your grocery and food lists.</p>
               <Button variant="outline" className="mt-4">Go to Lists</Button>
            </CardContent>
          </Card>
        </Link>
         <Link href="/game" className="w-full h-full">
           <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out text-center">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Whack-a-Food</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center justify-center gap-4">
              <Gamepad2 className="h-24 w-24 text-primary" />
              <p className="text-muted-foreground">Play a fun game of whack-a-mole!</p>
              <Button className="mt-4">Play Game</Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
