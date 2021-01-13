import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text, ImageProps, Dimensions} from 'react-native';
import styles from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../configs/images';
import colors from '../../../configs/colors';
import { BottomTab, EffectValue } from '..';
import { BottomTabType } from '../../../@types';
import Carousel from 'react-native-snap-carousel';

interface Props {
  onPress: (_: BottomTabType) => void;
}

type DATA = {id: number, name: string,value: number,source: ImageProps}

const component: React.FC<Props> = ({ onPress }) => {

  const data = [
    {id: 1, name: "角度", value: 10, source: images.angle },
    {id: 2, name: "彩度", value: 10, source: images.saturation },
    {id: 3, name: "明るさ", value: 10, source: images.brightness },
    {id: 4, name: "コントラスト", value: 10, source: images.contrast },
    {id: 5, name: "色彩", value: 10, source: images.tint }
  ]
  const carouselRef = React.useRef<any>();
  const ITEM_SIZE = Dimensions.get('window').width
  
  const _renderItem = (item: ListRenderItemInfo<DATA>) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress = {() => onPress('slider')}>
        <Text style={styles.filterNameText}>{item.item.name}</Text>
        <View style = {styles.filterImageContainer}>
          <Image source={item.item.source} style={styles.filterImage} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
          ref={carouselRef}
          data={data}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={ITEM_SIZE * 120 / 375}
          keyExtractor={(_, index) => `${index}`}
      />

    </View>
  );
};

export default component;
