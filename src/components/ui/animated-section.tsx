"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up';
  delay?: string; // e.g., 'delay-100'
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-in-up',
  delay,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', // Trigger when 100px of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out opacity-0',
        isVisible && 'opacity-100',
        isVisible && animation === 'fade-in-up' && 'translate-y-0',
        animation === 'fade-in-up' && 'translate-y-10',
        isVisible && animation === 'fade-in' && 'opacity-100',
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
