'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import styles from '../styles/styles.js';
import Camera from 'react-native-camera';

export default class CameraScreen extends React.Component {
	static navigationOptions = {
		title: 'Camera'
	};

	constructor() {
		super();
		
		this.state = {
			cameraType: Camera.constants.Type.back,
			frame: 1
		}
	}

	componentDidMount() {
		setInterval(() => {
			let frame = this.state.frame;

			frame++;

			if (frame > 149) {
				frame = 1;
			}

			this.setState({frame});
		}, 1000);
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

				<Text style={styles.cameraText}>Frame: {this.state.frame}</Text>
				<Image style={styles.cameraStream} source={{uri: `./gifs/${this.state.frame}.gif`}}/>
			</Camera>
		);
	}
}
