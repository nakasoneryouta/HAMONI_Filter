import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../../../configs/colors';
import fontSize from '../../../configs/fontSize';

const ITEM_SIZE = (Dimensions.get('window').width * 24) / 375;
const HEADER_HEIGHT = (Dimensions.get('window').height * 94) / 812;
const HORIZONTAIL_SPACEING = Dimensions.get('window').width * 12 / 375;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
  },
  title: {
    fontSize: RFPercentage(fontSize.large),
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
    width: '50%',
    color: colors.white,
  },
  leftContaienr: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: HORIZONTAIL_SPACEING
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: HORIZONTAIL_SPACEING,
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
  },
  nextText: {
    fontSize: RFPercentage(fontSize.large),
    color: colors.pink,
    fontWeight: 'bold'
  },
});

export default styles;
