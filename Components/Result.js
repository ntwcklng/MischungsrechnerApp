
import Styles from '../Styles/Result';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Result extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this._onClickReset = this._onClickReset.bind(this);
  }
  _onClick() {
    this.props.handlePress();
  }
  _onClickReset() {
    this.props.handlePressReset();
  }
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
  },
  resultText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'System',
    fontSize: 26,
  },
});
