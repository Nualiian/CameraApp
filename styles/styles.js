import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	menu: {
		marginTop: 100
	},
	menuItem: {
		marginTop: 20
	},
	menuItemtext: {
		fontSize: 25
	},
	settingsList: {
		paddingBottom: 20,
		margin: 10
	},
	settingsCell: {
		paddingTop: 50,
		alignItems: 'center'
	},
	cellViewText: {
		fontSize: 25
	},
	customSlider: {
		width: 200,
		height: 50
	},
	camera: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: "transparent"
	}
});

export default styles;
