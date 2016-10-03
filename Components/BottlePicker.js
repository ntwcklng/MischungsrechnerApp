import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Styles from '../Styles/BottlePicker';

import HorizontalPicker from './HorizontalPicker';



export default class BottlePicker extends Component {
  constructor() {
    super();
    this.state = {
      values: ['250ml', '473ml', '500ml', '1l', '15l', '20l'],
      bottleValue: '',
      bumpedUp: 0
    };
    this._onValueChange = this._onValueChange.bind(this);
    this._onFocus = this._onFocus.bind(this);
  }
  _onFocus() {
    this.props.onFocus();
  }
  componentWillReceiveProps(next) {
    this.setState({
      bottleValue: next.bottleValue,
    });
  }
  _onValueChange(value) {
    if(!value.match(/\d/g)) { value = null; }

    this.setState({
      bottleValue: value
    });
    this.props.bottlePickerValueChange(value);
  }
  render() {
    return (
        <View style={[Styles.container]}>
          <Text style={Styles.text}>Flaschen- bzw. Eimergröße in ml</Text>
          <TextInput
              onFocus={this._onFocus}
              onChangeText={this._onValueChange}
              value={this.state.bottleValue}
              style={Styles.input}
              keyboardType='numbers-and-punctuation'
              returnKeyType='done'
              clearButtonMode='always'
              selectTextOnFocus={true}
              placeholder='Sprühflasche, Eimer etc.'
              autoCorrect={false}
              ref='bottlePicker'
              underlineColorAndroid='transparent'

          />
          <Text style={Styles.text}>Häufig genutzte Größen</Text>
          <HorizontalPicker items={this.state.values} onPress={(val) => this._onValueChange(val)} />
        </View>
    );
  }
};
