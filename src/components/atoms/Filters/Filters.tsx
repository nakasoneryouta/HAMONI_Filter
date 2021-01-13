import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text, Dimensions, ImageProps} from 'react-native';
import styles from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../configs/images';
import colors from '../../../configs/colors';
import Carousel from 'react-native-snap-carousel';

interface Props {
  onScroll: () => void
}

type DATA = {name: string,source: ImageProps}

const component: React.FC<Props> = ({ onScroll }) => {

  const data:DATA[] = [
    { name: "オリジナル", source: images.sample },
    { name: "麺類", source: images.noodles },
    { name: "麺類", source: images.noodles },
    { name: "麺類", source: images.noodles },
    { name: "揚げ物", source: images.frid },
    { name: "揚げ物", source: images.frid },
    { name: "揚げ物", source: images.frid },
    { name: "海鮮系", source: images.sashimi },
    { name: "海鮮系", source: images.sashimi },
    { name: "海鮮系", source: images.sashimi },
    { name: "スイーツ", source: images.sweets },
    { name: "スイーツ", source: images.sweets },
    { name: "スイーツ", source: images.sweets },
  ]
  const carouselRef = React.useRef<any>();
  const ITEM_SIZE = Dimensions.get('window').width

  const _renderItem = (item: ListRenderItemInfo<DATA>) => {
    return (
      <TouchableOpacity style={styles.filterImageContainer} onPress = {() => console.log("")}>
        <Text style={styles.filterNameText}>{item.item.name}</Text>
        <Image source={item.item.source} style={styles.filterImage}/>
      </TouchableOpacity>
    )
  }

  const _onSnapToItem = () => {
    onScroll()
  }

  return (
    <View style = {styles.container}>
      {/* <FlatList data={data}
        horizontal
        renderItem={_renderItem}
        keyExtractor={(_, index:number) => index.toString()}
      /> */}
      <Carousel
          ref={carouselRef}
          data={data}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={ITEM_SIZE * 110 / 375}
          onSnapToItem={_onSnapToItem}
          keyExtractor={(_, index) => `${index}`}
      />
    </View>
  );
};

export default component;
