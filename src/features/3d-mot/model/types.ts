import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { RootStackParamList } from '@/app/providers/navigation/types';

export type ThreeDMotProps = {
  route: RouteProp<RootStackParamList, 'ThreeDMot'>;
  navigation: FrameNavigationProp<RootStackParamList, 'ThreeDMot'>;
};

export type GameState = 'waiting' | 'playing' | 'finished';