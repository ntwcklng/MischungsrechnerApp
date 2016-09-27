
var dismissKeyboard = require('dismissKeyboard');
import Styles from '../Styles/PartPicker';
import React, { Component } from 'react';
import {
  Text,
  View,
  SegmentedControlIOS,
  TextInput
} from 'react-native';

export default class PartPicker extends Component {
  constructor() {
    super();
    this.state = {
      values: ['1:2', '1:4', '1:10', '1:13', '1:20'],
      part1Value: '',
      part2Value: '',
    };
    this._onValueChange1 = this._onValueChange1.bind(this);
    this._onValueChange2 = this._onValueChange2.bind(this);
    this._onValueChangeSegment = this._onValueChangeSegment.bind(this);
  }
  componentWillReceiveProps(next) {
    this.setState({
      part1Value: next.part1Value,
      part2Value: next.part2Value,
    });
  }
  _onValueChange1(value) {
    if(!value.match(/\d/g)) { value = null; }
    this.setState({part1Value: value});
    this.props.val1Change(value);
  }
  _onValueChange2(value) {
    if(!value.match(/\d/g)) { value = null; }
    this.setState({part2Value: value});
    this.props.val2Change(value);
  }
  _onValueChangeSegment(value) {

    var splitVal = value.split(':');
    this.setState({
      part1Value: splitVal[0],
      part2Value: splitVal[1]
    });
    this._onValueChange1(splitVal[0]);
    this._onValueChange2(splitVal[1]);

  }
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Verhältnis 1</Text>
        <TextInput
            onChangeText={this._onValueChange1}
            onBlur={()=>dismissKeyboard()}
            value={this.state.part1Value}
            style={Styles.input}
            keyboardType='numbers-and-punctuation'
            returnKeyType='done'
            clearButtonMode='always'
            selectTextOnFocus={true}
            placeholder='Produkt'
            autoCorrect={false}
        />
        <Text style={Styles.text}>Verhältnis 2</Text>
        <TextInput
            onChangeText={this._onValueChange2}
            value={this.state.part2Value}
            style={Styles.input}
            onBlur={()=>dismissKeyboard()}

            keyboardType='numbers-and-punctuation'
            returnKeyType='done'
            clearButtonMode='always'
            selectTextOnFocus={true}
            placeholder='Wasser'
            autoCorrect={false}
            ref='partPicker2'
        />
        <Text style={Styles.text}>Beliebte Mischungsverhältnisse</Text>
        <SegmentedControlIOS
            values={this.state.values}
            onValueChange={this._onValueChangeSegment}
            tintColor='#44bcff'
            momentary={true}
        />
      </View>
    );
  }
};
