'use strict';

import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Camera from 'react-native-openalpr';

import styles from '../styles/styles.js';

class ALPRCameraScreen extends React.Component {
	constructor(props) {
	  super(props);

	  this.camera = null;
	  this.state = {
	    camera: {
	      aspect: Camera.constants.Aspect.fill,
	    },
	    plate: 'Naskenujte EČV',
	  };
	}


	onPlateRecognized = ({ plate, confidence }) => {
	  if (confidence > 0.9) {
	    this.setState({
	      plate,
	    })
	  }
	}

	render() {
		return (
			<View>
				<View>
					<Camera
						ref={(cam) => {
							this.camera = cam;
						}}
						style={styles.camera}
						aspect={this.state.camera.aspect}
						captureQuality={Camera.constants.CaptureQuality.medium}
						country="eu"
						onPlateRecognized={this.onPlateRecognized}
						plateOutlineColor="#ff0000"
						showPlateOutline
						torchMode={Camera.constants.TorchMode.off}
						touchToFocus
					/>
				</View>
				<View>
					<Text style={styles.text}>{this.state.plate}</Text>
				</View>
			</View>
		);
	}
}

export default ALPRCameraScreen;
