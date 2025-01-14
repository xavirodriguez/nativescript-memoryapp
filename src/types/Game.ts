import { GameProgress } from './GameProgress';
import { GameRules } from './GameRules';

export interface Game {
  id: string;
  title: string;
  description: string;
  progress: GameProgress;
  rules: GameRules; //nada
}
