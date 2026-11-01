"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursorWhenDone?: boolean;
}

export default function TypingAnimation({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursorWhenDone = false,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTimer = setTimeout(() => {
      setIsTyping(true);
      const interval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayedText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(startTimer);
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {(isTyping || showCursorWhenDone) && (
        <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-current animate-pulse align-baseline" />
      )}
    </span>
  );
}

