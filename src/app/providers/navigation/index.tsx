import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { RootStackParamList } from './types';
import { MenuScreen } from '@/features/menu';
import { NumberSequenceGame } from '@/features/number-sequence';
import { ThreeDMotGame } from '@/features/3d-mot';

const StackNavigator = stackNavigatorFactory();

export const AppNavigator = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator<RootStackParamList>
      initialRouteName="Menu"
      screenOptions={{
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Memoria de Trabajo',
        }}
      />
      <StackNavigator.Screen
        name="NumberSequence"
        component={NumberSequenceGame}
        options={{
          title: 'Secuencias Numéricas',
        }}
      />
      <StackNavigator.Screen
        name="ThreeDMot"
        component={ThreeDMotGame}
        options={{
          title: 'Bolitas moviéndose',
        }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);