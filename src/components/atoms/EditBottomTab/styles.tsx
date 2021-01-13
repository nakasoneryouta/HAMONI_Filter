import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../configs/colors';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		height: HEIGHT * 88 / 812,
		width: WIDTH,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
	},
	item: {
		width: WIDTH / 2,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	text: {
		fontSize: 17,
		color: colors.white,
		fontWeight: '500',
	}
})

export default styles;