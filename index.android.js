'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings'
	};

	render() {
		return(
			<Text>Settings page goes here</Text>
		);
	}
}

export default class HomeScreen extends React.Component {
	// static navigationOptions = {
	//   title: 'Welcome',
	// };

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Image
					source={ require('./assets/images/logo.png') }
				/>

				<View style={styles.menu}>
					<Button
						style={styles.menuItem}
						title="Camera"
						color="#841584"
						onPress={ () => navigate('Camera') }
					/>

					<Button
						style={styles.menuItem}
						title="Settings"
						onPress={ () => navigate('Settings') }
					/>

					<Button
						style={styles.menuItem}
						title="About"
						onPress={ () => navigate('About') }
					/>
				</View>
			</View>
		);
	}
}

const CameraApp = StackNavigator({
	Home: { screen: HomeScreen },
	Settings: { screen: SettingsScreen }
});

const styles = StyleSheet.create({
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
		marginBottom: 20,
		textAlign: 'center',
		fontSize: 25
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
