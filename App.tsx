import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from './src/components/navigations/AppNavigator';

export default function App() {
  return (
    <Root>
      <AppNavigator />
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
