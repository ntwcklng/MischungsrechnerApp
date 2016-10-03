
var dismissKeyboard = require('dismissKeyboard');
import Styles from '../Styles/PartPicker';
import GlobalStyle from '../Styles/GlobalStyle';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import HorizontalPicker from './HorizontalPicker';

const dilutions = [
  '1:2',
  '1:4',
  '1:10',
  '1:13',
  '1:20',
  '1:100',
  '1:500',
];

export default class PartPicker extends Component {
  constructor() {
    super();
    this.state = {
      values: ['1:2', '1:4', '1:10', '1:13', '1:20','1:100','1:500'],
      part1Value: '',
      part2Value: '',
    };
    this._onValueChange1 = this._onValueChange1.bind(this);
    this._onValueChange2 = this._onValueChange2.bind(this);
    this._onValueChangeSegment = this._onValueChangeSegment.bind(this);
    this.onFocusPart = this.onFocusPart.bind(this);
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
  onFocusPart() {
    this.props.onFocus();
  }
  renderDilution() {
    const tmp = dilutions.map((dil) => {
        return (
          <TouchableOpacity
            style={Styles.horizontalBtns} onPress={this._onValueChangeSegment(dil)}>
            <Text>{dil}</Text>
          </TouchableOpacity>
        )
    });
    console.log(tmp);
    return tmp;
  }
  componentWillMount() {
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flex:.4}}>
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
                onFocus={this.onFocusPart}
                underlineColorAndroid='transparent'
            />
          </View>
          <View style={{flex:.2}} />
          <View style={{flex:.4}}>
            <Text style={Styles.text}>Verhältnis 2</Text>
            <TextInput
            onFocus={this.onFocusPart}
                onChangeText={this._onValueChange2}
                value={this.state.part2Value}
                style={Styles.input}
                onBlur={()=>dismissKeyboard()}
                underlineColorAndroid='transparent'
                keyboardType='numbers-and-punctuation'
                returnKeyType='done'
                clearButtonMode='always'
                selectTextOnFocus={true}
                placeholder='Wasser'
                autoCorrect={false}
                ref='partPicker2'
            />
          </View>
          </View>
        <Text style={Styles.text}>Beliebte Mischungsverhältnisse</Text>
        <HorizontalPicker items={this.state.values} onPress={(val) => this._onValueChangeSegment(val)} />
        {/*<SegmentedControlIOS
            values={this.state.values}
            onValueChange={this._onValueChangeSegment}
            tintColor='#44bcff'
            momentary={true}
        />*/}
      </View>
    );
  }
};
