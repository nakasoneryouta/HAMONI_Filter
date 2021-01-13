import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

import { Text } from 'native-base';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

export default () => {
  return (
    <NavigationContainer theme={MyTheme} fallback={<Text>Loading...</Text>}>
      <HomeNavigator />
    </NavigationContainer>
  );
};
