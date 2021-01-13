import React from 'react';
import { View } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from '../../src/components/navigations/AppNavigator';

const App: React.FC = () => {
  return (
    <Root>
      <AppNavigator />
    </Root>
  );
};

export default App;
