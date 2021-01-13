import React from 'react';
import { View } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from '../../src/components/navigations/AppNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../stores';

const App: React.FC = () => {
  return (
    <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
        <Root>
          <AppNavigator />
        </Root>
      </PersistGate>
		</Provider>
  );
};

export default App;
