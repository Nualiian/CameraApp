import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SettingsScreen extends React.Component {
  static NavigationOptions = {
    title: 'Settings'
  };

  render() {
    return(
      <Text>Settings page goes here</Text>
    );
  }
}

export default class HomeScreen extends React.Component {
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
            title="Settings"
            onPress={ () => navigate('Settings') }
          />

          <Text style={styles.menuItem}>
            Settings
          </Text>

          <Text style={styles.menuItem}>
            About
          </Text>
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
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  menu: {
    marginTop: 100
  },
  menuItem: {
    paddingTop: 20,

    textAlign: 'center',
    fontSize: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
