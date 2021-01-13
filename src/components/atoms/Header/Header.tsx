import React from 'react';
import styles from './styles';
import { SafeAreaView ,Image ,View ,Text, ImageProps} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../configs/images';

type Props = {
  title: string;
  left?: {source: ImageProps,onPress: () => void};
  right?: { text: string, onPress: () => void}
};

const component: React.FC<Props> = ({ left, right, title }) => {
  return (
    <SafeAreaView  style={styles.container}>
      {left ? (
        <TouchableOpacity onPress={left.onPress} style={styles.leftContaienr}>
          <Image style={styles.image} source={left.source} />
        </TouchableOpacity>
      ) : (
        <View style={styles.leftContaienr} />
      )}
      <Text style={styles.title}>{title}</Text>
      {right ? (
        <TouchableOpacity style = {styles.rightContainer} onPress = {right.onPress}>
          <Text style={styles.nextText}>{right.text}</Text>
					</TouchableOpacity>
      ) : (
        <View style={styles.rightContainer} />
      )}
    </SafeAreaView>
  );
};

export default component;
