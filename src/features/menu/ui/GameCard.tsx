import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { Game } from '@/shared/types';
import { NavigateToGame } from '../model/types';

type GameCardProps = {
  game: Game;
  onTap: NavigateToGame;
};

export function GameCard({ game, onTap }: GameCardProps) {
  return (
    <gridLayout
      style={styles.card}
      rows="auto, auto, auto"
      columns="*, auto"
      onTap={() => onTap(game.id, game.progress.level)}
    >
      <label row={0} col={0} className="text-xl font-bold" text={game.title} />
      <label
        row={0}
        col={1}
        className="text-yellow-500"
        text={`🏆 ${game.progress.highScore}`}
      />
      <label
        row={1}
        col={0}
        colSpan={2}
        className="text-gray-500"
        textWrap={true}
        text={game.description}
      />
      <gridLayout
        row={2}
        col={0}
        colSpan={2}
        rows="auto, auto"
        columns="*, *"
        className="mt-2"
      >
        <label
          row={0}
          col={0}
          className="text-sm text-gray-500"
          text={`Nivel ${game.progress.level}/${game.progress.maxLevel}`}
        />
        <label
          row={0}
          col={1}
          className="text-sm text-gray-500 text-right"
          text={`${game.progress.currentScore}/${game.progress.nextLevelScore} pts`}
        />
        <progress
          row={1}
          col={0}
          colSpan={2}
          value={game.progress.currentScore}
          maxValue={game.progress.nextLevelScore}
          className="mt-1"
        />
      </gridLayout>
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});