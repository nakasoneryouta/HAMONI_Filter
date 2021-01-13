import React from 'react';
import { View } from 'react-native';
import { HomeNavigatorParamList } from '../../@types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';


type NavigationProp = StackNavigationProp<
  HomeNavigatorParamList,
  'SelectEffect'
>;
type NativeRouteProp = RouteProp<HomeNavigatorParamList, 'SelectEffect'>;

interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({}) => {
  return <View />;
};

export default component;
