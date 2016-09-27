
import Styles from '../Styles/Result';
import React, { Component } from 'react';
import {
  AppRegistry,
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
        <View style={Styles.results}>
          <Text style={Styles.resultText}>{this.props.result}</Text>
        </View>
        <View style={Styles.metaView}>
          <TouchableOpacity
              style={Styles.resetButton}
              onPress={this._onClickReset}
              underlayColor='#9DDAFC'>
              <Text style={Styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={Styles.infoButton}
              underlayColor='#9DDAFC'
              onPress={this._onClick}>
              <Text style={Styles.text}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
