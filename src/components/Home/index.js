import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import HomePage form '../components/Home'

class HomePage extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    )
  }
}

HomePage.propTypes = {
  };
  
  const styles = EStyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'indigo',
      color: 'white',
    },
  });

export default HomePage;