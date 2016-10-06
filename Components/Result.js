import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Result extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.results}>
          <Text style={styles.resultText}>{this.props.result}</Text>
        </View>
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
