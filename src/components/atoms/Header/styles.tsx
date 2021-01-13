import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../configs/colors';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: Dimensions.get('window').height * 88 / 812,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: colors.white,
		fontSize: 17,
		fontWeight: '500',
	}
})

export default styles;