import { useState } from 'react';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { RootStackParamList } from '@/app/providers/navigation/types';
import { Game } from '@/shared/types';
import { NavigateToGame } from './types';

export function useGames(
  navigation: FrameNavigationProp<RootStackParamList, 'Menu'>
) {
  const [games] = useState<Game[]>([
    {
      id: 'ThreeDMot',
      title: 'Bolitas moviéndose',
      description: 'Un juego donde sigues objetivos en movimiento.',
      progress: {
        level: 1,
        maxLevel: 10,
        currentScore: 0,
        nextLevelScore: 100,
        highScore: 280,
      },
      rules: {
        baseLength: 3,
        levelIncrement: 1,
        timeLimit: 30,
      },
    },
    {
      id: 'NumberSequence', // Changed to match navigation
      title: 'Secuencias Numéricas',
      description: 'Memoriza y repite secuencias de números en orden inverso',
      progress: {
        level: 1,
        maxLevel: 10,
        currentScore: 0,
        nextLevelScore: 100,
        highScore: 280,
      },
      rules: {
        baseLength: 3,
        levelIncrement: 1,
        timeLimit: 30,
      },
    },
    {
      id: 'NBack',
      title: 'N-Back',
      description: 'Identifica repeticiones con N posiciones de distancia',
      progress: {
        level: 2,
        maxLevel: 8,
        currentScore: 150,
        nextLevelScore: 200,
        highScore: 450,
      },
      rules: {
        baseLength: 1,
        levelIncrement: 1,
        timeLimit: 30,
      },
    },
  ]);

  const navigateToGame: NavigateToGame = (gameId, level) => {
    switch (gameId) {
      case 'NumberSequence':
        navigation.navigate('NumberSequence', { level });
        break;
      case 'ThreeDMot':
        navigation.navigate('ThreeDMot', { level });
        break;
      default:
        console.log(`Unknown game: ${gameId}`);
        break;
    }
  };

  return { games, navigateToGame };
}
