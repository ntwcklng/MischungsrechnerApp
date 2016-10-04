
import Styles from '../Styles/MischungsrechnerContent';
import BottlePicker from './BottlePicker';
import PartPicker from './PartPicker';
import Result from './Result';
import Calculate from './Calculate';
import ResultView from './ResultView';
var calc = [0,0];


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class MischungsrechnerContent extends Component {
  constructor() {
    super();
    this.state = {
      bottleValue: '',
      part1Value: '1',
      part2Value: '4',
      behavior: 'position'
    };
    this._ResultViewPress = this._ResultViewPress.bind(this);
    this.part1ValueChange = this.part1ValueChange.bind(this);
    this.part2ValueChange = this.part2ValueChange.bind(this);
    this.bottlePickerValueChange = this.bottlePickerValueChange.bind(this);
    this._resetResult = this._resetResult.bind(this);
  }
  _ResultViewPress() {
    this.props.navigator.push({
      title: 'Mischungsverhältnis',
      component: ResultView,
      id: 'result',
      passProps: { result: calc[0], bottle: this.state.bottleValue, part1: this.state.part1Value, part2: this.state.part2Value }
    });
  }
  part1ValueChange(value) {
    if(!value) {
      this.setState({
        part1Value: ''
      });
      return;
    } else {
      this.setState({
        part1Value: value
      });
    }
  }
  part2ValueChange(value) {
    if(!value) {
      this.setState({
        part2Value: ''
      });
      return;
    } else {
      this.setState({
        part2Value: value
      });
    }
  }
  bottlePickerValueChange (value) {
    if(!value) {
      this.setState({
        bottleValue: ''
      });
      return;
    }

    if(value === '15l' || value === '20l' || value === '1l') {
      value = (parseInt(value)*1000).toString();
    } else {
      value = (parseInt(value)).toString();
    }

    this.setState({
      bottleValue: value.toString()
    });
  }
  _resetResult() {
    this.setState({
      bottleValue: '',
      part1Value: '',
      part2Value: ''
    });
  }
  render() {
    if(this.state.part1Value !== 0 && this.state.part2Value !== 0 && this.state.bottleValue !== 0) {
      calc = Calculate(parseInt(this.state.part1Value), parseInt(this.state.part2Value), this.state.bottleValue);
    } else {
      calc[0] = 0;
    }
    var resultOpacity = (calc[0] != 0) ? true : false;
    return (
      <KeyboardAwareScrollView>
      <View style={Styles.container}>
        <PartPicker
            onFocus={this._partPickerFocus}
            val1Change={(value) => this.part1ValueChange(value)}
            val2Change={(value) => this.part2ValueChange(value)}
            part1Value={this.state.part1Value}
            part2Value={this.state.part2Value}
        />
        <View style={Styles.hr} />
        <BottlePicker
            onFocus={this._bottlePickerFocus}
            bottlePickerValueChange={this.bottlePickerValueChange}
            bottleValue={this.state.bottleValue}
        />
        {resultOpacity && <Result result={calc[0]} handlePress={this._ResultViewPress} handlePressReset={this._resetResult}/>}
      </View>
      </KeyboardAwareScrollView>
    );
  }
};
