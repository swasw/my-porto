import WhackAMoleGame from "@/components/game/whack-a-mole";

export default function GamePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
       <h1 className="text-5xl font-bold font-headline text-white text-center">Whack-a-Food!</h1>
       <WhackAMoleGame />
    </div>
  )
}
