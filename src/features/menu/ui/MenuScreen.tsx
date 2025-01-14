import * as React from 'react';
import { MenuProps } from '../model/types';
import { GameCard } from './GameCard';
import { useGames } from '../model/useGames';

export function MenuScreen({ navigation }: MenuProps) {
  const { games, navigateToGame } = useGames(navigation);

  return (
    <>
      <stackLayout>
        <label className="text-3xl font-bold text-center m-4">
          Entrenamiento de Memoria
        </label>
      </stackLayout>
      <flexboxLayout flexDirection="column">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onTap={navigateToGame} />
        ))}
      </flexboxLayout>
    </>
  );
}
