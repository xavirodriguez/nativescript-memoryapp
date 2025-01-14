import * as React from 'react';
import { WebView } from '@nativescript/core';
import { GameState } from '../model/types';

type GameContentProps = {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  score: number;
  webViewRef: React.RefObject<WebView>;
  onLoadFinished: () => void;
  onMessage: (msg: string) => void;
  handleFinish: () => void;
};

export function GameContent({
  gameState,
  setGameState,
  score,
  webViewRef,
  onLoadFinished,
  onMessage,
  handleFinish,
}: GameContentProps) {
  return (
    <>
      {gameState === 'waiting' && (
        <button
          className="btn-primary"
          text="Comenzar"
          onTap={() => setGameState('playing')}
        />
      )}

      {gameState === 'playing' && (
        <webView
          ref={webViewRef}
          src="~/assets/3dmot.html"
          onLoadFinished={onLoadFinished}
          onMessage={onMessage}
          style={{ width: '100%', height: 400 }}
        />
      )}

      {gameState === 'finished' && (
        <stackLayout>
          <label className="text-2xl text-center mb-4">
            {score > 0 ? '¡Enhorabuena!' : 'Esta vez no lo has conseguido'}
          </label>
          <label className="text-xl text-center mb-4">
            Puntuación: {score}
          </label>
          <button
            className="btn-secondary"
            text="Volver al menú"
            onTap={handleFinish}
          />
        </stackLayout>
      )}
    </>
  );
}