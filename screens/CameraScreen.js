'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import styles from '../styles/styles.js';
import Camera from 'react-native-camera';

export default class CameraScreen extends React.Component {
	static navigationOptions = {
		title: 'Camera'
	};

	render() {
		return(
			<View style={styles.container}>
				<Camera
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}>
				</Camera>
			</View>
		);
	}
}
