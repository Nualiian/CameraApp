'use strict';

import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import styles from '../styles/styles.js';

export default class HomeScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Image
					source={ require('../assets/images/logo.png') }
				/>

				<View style={styles.menu}>
					<TouchableHighlight
						style={styles.menuItem}
						onPress={ () => navigate('Camera') }
					>
						<Text style={styles.menuItemtext}>Camera</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style={styles.menuItem}
						onPress={ () => navigate('Settings') }
					>
						<Text style={styles.menuItemtext}>Settings</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style={styles.menuItem}
						onPress={ () => navigate('ALPRCamera') }
					>
						<Text style={styles.menuItemtext}>ALPR Camera</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style={styles.menuItem}
						onPress={ () => navigate('About') }
					>
						<Text style={styles.menuItemtext}>About</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
