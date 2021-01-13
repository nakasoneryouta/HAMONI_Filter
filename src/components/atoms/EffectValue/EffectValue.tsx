import React from 'react';
import { View ,Slider} from 'react-native';
import styles from './styles';

type Props = {};

const component: React.FC<Props> = ({}) => {
  return (
    <View style = {styles.container}>
      <Slider/>
    </View>
  )
};

export default component;
