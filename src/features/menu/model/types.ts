import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { RootStackParamList } from '@/app/providers/navigation/types';
import { Game } from '@/shared/types';

export type MenuProps = {
  route: RouteProp<RootStackParamList, 'Menu'>;
  navigation: FrameNavigationProp<RootStackParamList, 'Menu'>;
};

export type NavigateToGame = (gameId: string, level: number) => void;