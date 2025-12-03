'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FoodCategoryIcon from '../food/food-category-icon';
import type { FoodCategory } from '@/lib/definitions';
import { Apple, Beef, Carrot, Milk, Wheat, ShoppingBasket, Skull } from 'lucide-react';

const foodCategories: FoodCategory[] = ['Fruit', 'Vegetable', 'Grain', 'Protein', 'Dairy', 'Other'];

type MoleType = FoodCategory | 'Bomb';

const moleIcons: Record<MoleType, React.ElementType> = {
  'Fruit': Apple,
  'Vegetable': Carrot,
  'Grain': Wheat,
  'Protein': Beef,
  'Dairy': Milk,
  'Other': ShoppingBasket,
  'Bomb': Skull,
};

const GAME_DURATION = 30; // in seconds

export default function WhackAMoleGame() {
  const [moles, setMoles] = useState<Array<MoleType | null>>(Array(9).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      setIsActive(false);
      return;
    }

    const gameInterval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    const moleInterval = setInterval(() => {
      const newMoles = Array(9).fill(null);
      const randomIndex = Math.floor(Math.random() * 9);
      const showBomb = Math.random() < 0.2; // 20% chance of a bomb
      if (showBomb) {
        newMoles[randomIndex] = 'Bomb';
      } else {
        const randomFood = foodCategories[Math.floor(Math.random() * foodCategories.length)];
        newMoles[randomIndex] = randomFood;
      }
      setMoles(newMoles);
    }, 800);

    return () => {
      clearInterval(gameInterval);
      clearInterval(moleInterval);
    };
  }, [isActive, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setIsActive(true);
  };

  const whackMole = (index: number) => {
    if (!isActive) return;

    const mole = moles[index];
    if (mole) {
      if (mole === 'Bomb') {
        setScore((s) => Math.max(0, s - 5)); // Lose 5 points for hitting a bomb
      } else {
        setScore((s) => s + 1);
      }
      const newMoles = [...moles];
      newMoles[index] = null;
      setMoles(newMoles);
    }
  };

  const renderMole = (mole: MoleType | null, index: number) => {
    const Icon = mole ? moleIcons[mole] : null;
    return (
      <div
        key={index}
        className={`w-24 h-24 md:w-32 md:h-32 bg-muted/80 rounded-full flex items-center justify-center cursor-pointer transition-all duration-150
        ${mole ? 'scale-100' : 'scale-0'}
        ${mole === 'Bomb' ? 'bg-red-500/50' : ''}`}
        onClick={() => whackMole(index)}
      >
        {Icon && <Icon className={`h-12 w-12 text-card-foreground ${mole === 'Bomb' ? 'text-white': 'text-primary'}`} />}
      </div>
    );
  };
  
  const isGameOver = !isActive && timeLeft <= 0;

  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">Score: <span className="text-primary">{score}</span></div>
          <div className="text-2xl font-bold">Time: <span className="text-primary">{timeLeft}</span></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {moles.map((mole, i) => renderMole(mole, i))}
        </div>
        <div className="flex justify-center">
            {isGameOver && (
                 <div className="text-center">
                    <p className="text-2xl font-bold mb-4">Game Over! Final Score: {score}</p>
                    <Button onClick={startGame}>Play Again</Button>
                </div>
            )}
            {!isActive && timeLeft === GAME_DURATION && (
                <Button onClick={startGame}>Start Game</Button>
            )}
        </div>
      </CardContent>
    </Card>
  );
}
