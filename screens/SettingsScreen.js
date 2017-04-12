'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Slider } from 'react-native';
import styles from '../styles/styles.js';

class CustomSlider extends React.Component {
	static defaultProps = {
		value: 5
	};

	state = {
		value: this.props.value
	};

	render() {
		return (
			<View>
				<Text style={styles.cellViewText}>
					Pictures to keep: {this.state.value}
				</Text>

				<Slider style={styles.customSlider}
					{...this.props}
					onValueChange={(value) => this.setState({value: value})}
					minimumValue={0}
					maximumValue={10}
					value={5}
					step={1.0}
				/>
			</View>
		);
	}
}

export default class SettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			trueSwitchIsOn: true,
			falseSwitchIsOn: false
		};
	}
	static navigationOptions = {
		title: 'Settings'
	};

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.settingsCell}>
					<Text style={styles.cellViewText}>Keep pictures</Text>

					<Switch
						onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
						style={{marginBottom: 10}}
						value={this.state.falseSwitchIsOn}
					/>
				</View>

				<View style={styles.settingsCell}>
					<CustomSlider/>
				</View>
			</View>
		);
	}
}
