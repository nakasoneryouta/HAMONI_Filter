import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigatorParamList } from '../../@types';
import { MultiImageEditErea, SelectEffect, SelectImages, SingleImageEditErea } from '../../screens';

const Stack = createStackNavigator<HomeNavigatorParamList>();

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SelectImages" mode="card">

    <Stack.Screen name="SingleImageEditErea" options={{ headerShown: false }}>
            {(props) => (
                <SingleImageEditErea navigation={props.navigation} />
            )}
    </Stack.Screen>

      <Stack.Screen name="SelectEffect" options={{ headerShown: false }}>
            {(props) => <SelectEffect navigation={props.navigation} />}
      </Stack.Screen>

      <Stack.Screen name="MultiImageEditErea" options={{ headerShown: false }}>
            {(props) => <MultiImageEditErea navigation={props.navigation} />}
      </Stack.Screen>

      <Stack.Screen name="SelectImages" options={{ headerShown: false }}>
            {(props) => <SelectImages navigation={props.navigation} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
