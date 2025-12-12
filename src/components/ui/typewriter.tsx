"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  loop?: boolean;
  speed?: number;
  className?: string;
}

export function Typewriter({
  texts,
  loop = true,
  speed = 100,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    // Pause before deleting
    if (!deleting && subIndex === current.length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    // Finish deleting → go to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => {
        if (prev + 1 === texts.length) return loop ? 0 : prev;
        return prev + 1;
      });
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(current.slice(0, subIndex));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, loop, speed]);

  return <span className={className}>{text}</span>;
}
