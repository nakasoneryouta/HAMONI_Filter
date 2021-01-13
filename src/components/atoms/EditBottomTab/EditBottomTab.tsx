import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text} from 'react-native';
import styles from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../configs/images';
import colors from '../../../configs/colors';

interface Props {
  onPress: () => void,
}

const component: React.FC<Props> = ({ onPress }) => {


  const _onPressCancel = () => {
    //全ての状態をリセットに戻す
    onPress()
    console.log("リセット")
  }

  const _onPressOk = () => {
    //セーブする
    onPress()
    console.log('セーブ')
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.item} onPress = {_onPressCancel}>
        <Text style = {styles.text}>キャンセル</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress = {_onPressOk}>
        <Text style = {styles.text}>完了</Text>
      </TouchableOpacity>

    </View>
  );
};

export default component;
