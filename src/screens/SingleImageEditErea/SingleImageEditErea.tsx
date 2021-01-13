import React from 'react';
import { View ,Image, ListRenderItemInfo ,Text} from 'react-native';
import { BottomTabType, HomeNavigatorParamList } from '../../@types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from './styles';
import images from '../../configs/images';
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../configs/colors';
import { BottomTab, Filters, Header ,Effects, EffectValue, EditBottomTab } from '../../components/atoms';
import { useDispatch, useSelector } from 'react-redux';

//redux
import { changeTab } from '../../stores/tabStore';
import { RootState } from '../../stores';

type NavigationProp = StackNavigationProp<
  HomeNavigatorParamList,
  'SingleImageEditErea'
>;
type NativeRouteProp = RouteProp<HomeNavigatorParamList, 'SingleImageEditErea'>;

interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({ navigation }) => {

  const dispatch = useDispatch()
  const tab = useSelector((state: RootState) => state.tab).tab;

  console.log("=======",tab)
  
  const _item = () => {
    if (tab == 'filter') {
      return (<Filters onScroll={() => console.log("")}/>)
    }
    else if (tab == 'edit') {
      return (<Effects onPress={() => dispatch(changeTab('slider'))}/>)
    }
    else if (tab == 'slider') {
      return (<EffectValue />)
    }
  }
  const _bottomTab = () => {
    if (tab == 'slider') {
      return(
        <EditBottomTab onPress={() => dispatch(changeTab('edit'))} />
      )
    }
    else {
      return (
        <BottomTab onPress={(tab) => dispatch(changeTab(tab))}/>
      )
    }
  }
  return (
    <View style={styles.container}>

      <Header title={"明るさ"} left={{source: images.close,onPress: () => navigation.goBack()}}/>

      <Image source={images.sample} style={styles.image} />

      <View style={styles.flatListContainer}>
        {_item()}
      </View>

      {_bottomTab()}
    </View>
  );
};

export default component;
