import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import Storage from 'react-native-storage';

const favourites = new Storage({
  storageBackend: AsyncStorage,
});

export default class Result extends Component {

  render() {
    return (
      <View style={{flex:1}}>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  results: {
    backgroundColor: '#44bcff',
    paddingVertical: 15,
    marginBottom: 8,
    borderRadius: 7,
  },
  resultText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'System',
    fontSize: 26,
  },
});
