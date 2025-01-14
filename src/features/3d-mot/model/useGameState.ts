import { useState, useCallback } from 'react';
import { GameState } from './types';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { RootStackParamList } from '@/app/providers/navigation/types';

export function useGameState(
  navigation: FrameNavigationProp<RootStackParamList, 'ThreeDMot'>
) {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [score, setScore] = useState<number>(0);

  const onMessage = useCallback((msg: string) => {
    if (msg === 'SUCCESS') {
      setScore((prev) => prev + 10);
      setGameState('finished');
    } else if (msg === 'FAIL') {
      setGameState('finished');
    }
  }, []);

  const handleFinish = () => {
    navigation.navigate('Menu');
  };

  return {
    gameState,
    setGameState,
    score,
    onMessage,
    handleFinish,
  };
}