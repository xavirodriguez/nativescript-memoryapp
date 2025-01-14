import * as React from 'react';
import { GameState } from '../model/types';
import { gameConfig } from '../model/config';
import { NumberButton } from './NumberButton';

type GameContentProps = {
  gameState: GameState;
  currentDigit: number | null;
  displayIndex: number;
  sequence: number[];
  userSequence: number[];
  timeLeft: number;
  score: number;
  currentLength: number;
  onNumberInput: (num: number) => void;
  onStartNewRound: () => void;
  onTogglePause: () => void;
};

export function GameContent({
  gameState,
  currentDigit,
  displayIndex,
  sequence,
  userSequence,
  timeLeft,
  score,
  currentLength,
  onNumberInput,
  onStartNewRound,
  onTogglePause,
}: GameContentProps) {
  return (
    <stackLayout className="w-full max-w-md">
      {gameConfig.ENABLE_TUTORIAL && gameState === 'waiting' && (
        <stackLayout className="mb-4">
          <label
            className="text-base text-center"
            text="Mira atentamente los números que aparecerán en pantalla, memorízalos, y luego, escribe la secuencia de atrás hacia adelante. Cada nivel será un poco más difícil que el anterior. ¿Estás listo para intentarlo?"
          />
        </stackLayout>
      )}

      {gameConfig.ENABLE_DIFFICULTY_INDICATOR && (
        <label
          className="text-sm text-center mb-2"
          text={`Secuencia de ${currentLength} dígitos`}
        />
      )}

      {gameState === 'showing' && currentDigit !== null && (
        <stackLayout className="mb-4">
          <label className="text-6xl text-center font-bold" text={currentDigit.toString()} />
          {gameConfig.ENABLE_DIFFICULTY_INDICATOR && (
            <label
              className="text-sm text-center mt-2"
              text={`${displayIndex + 1}/${sequence.length}`}
            />
          )}
        </stackLayout>
      )}

      {gameState === 'paused' && (
        <stackLayout className="mb-4">
          <label className="text-xl text-center mb-4" text="Juego en pausa" />
          <button 
            className="btn-primary"
            text="Reanudar" 
            onTap={onTogglePause} 
          />
        </stackLayout>
      )}

      {gameState === 'input' && (
        <stackLayout>
          <label
            className="text-lg text-center mb-2"
            text={`Tiempo restante: ${timeLeft}s`}
          />
          <label
            className="text-lg text-center mb-4"
            text="Ingresa la secuencia en orden inverso:"
          />
          <label 
            className="text-2xl text-center mb-4 font-bold" 
            text={userSequence.join(' ')} 
          />

          <gridLayout 
            rows="auto, auto, auto, auto" 
            columns="*, *, *"
            className="mb-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, i) => (
              <NumberButton
                key={num}
                num={num}
                onPress={onNumberInput}
                row={Math.floor(i / 3)}
                col={i % 3}
              />
            ))}
          </gridLayout>

          <button
            className="btn-secondary"
            text="Pausar"
            onTap={onTogglePause}
          />
        </stackLayout>
      )}

      {gameState === 'finished' && (
        <stackLayout>
          <label
            className="text-2xl text-center mb-4"
            text={score > 0 ? '¡Correcto!' : 'Incorrecto. ¡Inténtalo de nuevo!'}
          />
          <label 
            className="text-xl text-center mb-4" 
            text={`Puntuación: ${score}`} 
          />
          <button
            className="btn-primary"
            text="Siguiente ronda"
            onTap={onStartNewRound}
          />
        </stackLayout>
      )}

      {gameState === 'waiting' && (
        <button 
          className="btn-primary" 
          text="Comenzar" 
          onTap={onStartNewRound} 
        />
      )}
    </stackLayout>
  );
}