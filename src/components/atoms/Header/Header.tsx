import React from 'react';
import { View ,Text } from 'react-native';
import styles from './styles';

type Props = {
  text: string
};

const component: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{ text }</Text>
    </View>
  );
};

export default component;
