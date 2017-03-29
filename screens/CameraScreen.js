'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
					<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
				</Camera>
			</View>
		);
	}

	takePicture() {
	  const options = {};
	  //options.location = ...
	  this.camera.capture({metadata: options})
	    .then((data) => console.log(data))
	    .catch(err => console.error(err));
	}
}
