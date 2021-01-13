import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../configs/colors';

const ITEM_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		width:"100%",
		height: Dimensions.get('window').height * 140 / 812,
	},
	image: {
		width: ITEM_WIDTH,
		height: ITEM_WIDTH,
	},
	filterNameText: {
		fontSize: 17,
		color: colors.white
	},
	filterImageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 5,
	},
	filterImage: {
		width: ITEM_WIDTH * 100 / 375,
		height: ITEM_WIDTH * 100 / 375,
		marginTop: 10,
	}
})

export default styles;