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

type NavigationProp = StackNavigationProp<
  HomeNavigatorParamList,
  'SingleImageEditErea'
>;
type NativeRouteProp = RouteProp<HomeNavigatorParamList, 'SingleImageEditErea'>;

interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({ }) => {

  const [tabSelect, setTabSelect] = React.useState<BottomTabType>('filter')
  
  const _item = () => {
    if (tabSelect == 'filter') {
      return (<Filters onScroll={() => console.log("")}/>)
    }
    else if (tabSelect == 'edit') {
      return (<Effects onPress={() => setTabSelect('slider')}/>)
    }
    else if (tabSelect == 'slider') {
      return (<EffectValue />)
    }
  }
  const _bottomTab = () => {
    if (tabSelect == 'slider') {
      return(
        <EditBottomTab onPress={() => setTabSelect('edit')} />
      )
    }
    else {
      return (
        <BottomTab onPress={(tab) => setTabSelect(tab)}/>
      )
    }
  }
  return (
    <View style={styles.container}>

      <Header text={"明るさ"}/>

      <Image source={images.sample} style={styles.image} />

      <View style={styles.flatListContainer}>
        {_item()}
      </View>

      {_bottomTab()}
    </View>
  );
};

export default component;
