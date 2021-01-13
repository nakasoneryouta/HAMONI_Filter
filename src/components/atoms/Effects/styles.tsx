import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../configs/colors';

const ITEM_SIZE = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		width:"100%",
		height: Dimensions.get('window').height * 140 / 812,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterNameText: {
		fontSize: 17,
		color: colors.white,
		marginBottom: 10,
	},
	filterImageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: ITEM_SIZE * 100 / 375,
		height: ITEM_SIZE * 100 / 375,
		borderRadius: ITEM_SIZE * 100 / 375,
		borderWidth: 1,
		borderColor: colors.gray
	},
	itemContainer: {
		marginHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterImage: {
		width: ITEM_SIZE * 50 / 375,
		height: ITEM_SIZE * 50 / 375,
	}
})

export default styles;