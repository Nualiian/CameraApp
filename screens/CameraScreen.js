'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import styles from '../styles/styles.js';
import Camera from 'react-native-camera';

export default class CameraScreen extends React.Component {
	static navigationOptions = {
		title: 'Camera'
	};

	state = {
		cameraType: Camera.constants.Type.back
	}

	render() {
		return(
			<Camera
				ref={(cam) => {
					this.camera = cam;
				}}
				style={styles.camera}
				aspect={Camera.constants.Aspect.fill}
				type={this.state.cameraType}>
			</Camera>
		);
	}
}
