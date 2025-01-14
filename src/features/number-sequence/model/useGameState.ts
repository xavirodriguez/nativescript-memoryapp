import { useState, useEffect } from 'react';
import { GameState } from './types';
import { gameConfig } from './config';

export function useGameState(baseLength: number, level: number) {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameConfig.INITIAL_TIME);
  const [currentDigit, setCurrentDigit] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState(-1);

  const currentLength = baseLength + (level - 1);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (gameState === 'input') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState]);

  useEffect(() => {
    let displayTimer: NodeJS.Timeout | null = null;

    if (gameState === 'showing' && displayIndex >= 0) {
      setCurrentDigit(sequence[displayIndex]);
      
      displayTimer = setTimeout(() => {
        if (displayIndex >= sequence.length - 1) {
          setCurrentDigit(null);
          setGameState('input');
        } else {
          setDisplayIndex(prev => prev + 1);
        }
      }, gameConfig.SEQUENCE_DISPLAY_TIME);
    }

    return () => {
      if (displayTimer) clearTimeout(displayTimer);
    };
  }, [gameState, displayIndex, sequence]);

  return {
    gameState,
    setGameState,
    sequence,
    setSequence,
    userSequence,
    setUserSequence,
    score,
    setScore,
    timeLeft,
    setTimeLeft,
    currentDigit,
    setCurrentDigit,
    displayIndex,
    setDisplayIndex,
    currentLength,
  };
}