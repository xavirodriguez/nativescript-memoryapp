import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { WebView } from '@nativescript/core';
import { ThreeDMotProps } from '../model/types';
import { useGameState } from '../model/useGameState';
import { GameContent } from './GameContent';

export function ThreeDMotGame({ navigation, route }: ThreeDMotProps) {
  const { gameState, setGameState, score, onMessage, handleFinish } =
    useGameState(navigation);
  const webViewRef = React.useRef<WebView>(null);

  const onLoadFinished = () => {
    setGameState('playing');
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl text-center mb-4">
        Nivel {route.params.level}
      </label>

      <GameContent
        gameState={gameState}
        setGameState={setGameState}
        score={score}
        webViewRef={webViewRef}
        onLoadFinished={onLoadFinished}
        onMessage={onMessage}
        handleFinish={handleFinish}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
