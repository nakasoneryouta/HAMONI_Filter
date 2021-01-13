import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text} from 'react-native';
import styles from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../configs/images';
import colors from '../../../configs/colors';

interface Props {
  onPress: (value: 'edit' | 'filter') => void
}

const component: React.FC<Props> = ({ onPress }) => {

  const [isFilter, setIsFilter] = React.useState(false)

  const onPressFilter = () => {
    setIsFilter(false)
    onPress('filter')
  }

  const onPressEdit = () => {
    setIsFilter(true)
    onPress('edit')
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.item} onPress = {onPressFilter}>
        <Text style = {[styles.text,isFilter ? {color: colors.gray} : {}]}>フィルター</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress = {onPressEdit}>
        <Text style = {[styles.text, isFilter ? {} : {color: colors.gray}]}>編集</Text>
      </TouchableOpacity>

    </View>
  );
};

export default component;
