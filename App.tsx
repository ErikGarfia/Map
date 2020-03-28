import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native"; // if you have "esModuleInterop": true
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false

export default class BasicExample extends React.PureComponent {
  render() {
    return (
      <LottieView
        source={require('./assets/110-location.json')}
        autoPlay
        loop
      />
    );
  }
}