import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { MenuScreen } from '~/features/menu';
import { NumberSequenceGame } from '~/features/number-sequence';
import { ThreeDMotGame } from '~/features/3d-mot';
import { NavigationParamList } from '@/types/NavigationParamList';

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator<NavigationParamList>
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
