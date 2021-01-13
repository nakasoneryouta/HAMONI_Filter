import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../configs/colors';

const ITEM_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	image: {
		width: ITEM_WIDTH,
		height: ITEM_WIDTH,
	},
	itemContainer: {
		marginHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterNameText: {
		fontSize: 17,
		color: colors.white
	},
	filterImageContainer: {
		margin: 2.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterImage: {
		width: ITEM_WIDTH * 340 / 375,
		height: ITEM_WIDTH * 340 / 375,
		marginTop: 10,
	},
	carouselContainer: {
		flex: 1,
	},
	flatListContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default styles;