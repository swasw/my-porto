"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  text,
  speed = 100,
  className,
  cursorClassName,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    setIsTyping(true);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <h1 className={cn('relative', className)}>
      {displayedText}
      <span
        className={cn(
          'animate-typing-cursor',
          'ml-1 inline-block h-[1em] w-[4px] bg-foreground',
          isTyping ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000',
          cursorClassName
        )}
      />
    </h1>
  );
}
