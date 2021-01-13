import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text, Dimensions, ImageProps} from 'react-native';
import { BottomTabType, HomeNavigatorParamList } from '../../@types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';
import images from '../../configs/images';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../configs/colors';
import { BottomTab, Filters, Header ,Effects, EffectValue, EditBottomTab } from '../../components/atoms';
import Carousel from 'react-native-snap-carousel';

type NavigationProp = StackNavigationProp<
  HomeNavigatorParamList,
  'SingleImageEditErea'
>;
type NativeRouteProp = RouteProp<HomeNavigatorParamList, 'SingleImageEditErea'>;

interface Props {
  navigation: NavigationProp;
}


const component: React.FC<Props> = ({ navigation }) => {


  const carouselRef = React.useRef<any>();
  const [selectImages, setSelectImages ] = React.useState([images.sample,images.sample])


  const _renderItem = (item: ListRenderItemInfo<ImageProps>) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress = {() => navigation.navigate("SingleImageEditErea")}>
        <View style = {styles.filterImageContainer}>
          <Image source={images.sample} style={styles.filterImage} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>

      <Header text={""} />
      
      <View style = {styles.carouselContainer}>
        <Carousel
            ref={carouselRef}
            data={selectImages}
            renderItem={_renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width * 330 / 375}
          />
      </View>

      <View style={styles.flatListContainer}>
        <Filters onScroll={() => console.log("")}/>
      </View>

    </View>
  );
};

export default component;
