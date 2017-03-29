'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/styles.js';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings'
	};

	render() {
		return(
			<View style={styles.container}>
				<Text>Settings page goes here</Text>
			</View>
		);
	}
}
