import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import stylesConfig from './configs/styles';
import RootNavigation from './RootNavigation';

EStyleSheet.build(stylesConfig);

export default class App extends Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}


