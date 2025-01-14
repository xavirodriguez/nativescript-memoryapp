import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { RootStackParamList } from '@/app/providers/navigation/types';

export type NumberSequenceProps = {
  route: RouteProp<RootStackParamList, 'NumberSequence'>;
  navigation: FrameNavigationProp<RootStackParamList, 'NumberSequence'>;
};

export type GameState = 'waiting' | 'showing' | 'input' | 'finished' | 'paused';

export type GameConfig = {
  SEQUENCE_DISPLAY_TIME: number;
  SEQUENCE_TRANSITION_TIME: number;
  INITIAL_TIME: number;
  ENABLE_FEEDBACK_SOUND_ANIMATION: boolean;
  ENABLE_DIFFICULTY_INDICATOR: boolean;
  ENABLE_TUTORIAL: boolean;
  ENABLE_SHOW_SEQUENCE_ANIMATION: boolean;
  ENABLE_UNIFIED_STYLE: boolean;
  ENABLE_CONFETTI_ANIMATION: boolean;
};