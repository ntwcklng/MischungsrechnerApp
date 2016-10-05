import BottlePicker from './BottlePicker';
import PartPicker from './PartPicker';
import Result from './Result';
import Calculate from './Calculate';
let calc = [0,0];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class MischungsrechnerContent extends Component {
  constructor() {
    super();
    this.state = {
      bottleValue: '',
      part1Value: '1',
      part2Value: '4',
    };
    this.part1ValueChange = this.part1ValueChange.bind(this);
    this.part2ValueChange = this.part2ValueChange.bind(this);
    this.bottlePickerValueChange = this.bottlePickerValueChange.bind(this);
    this._resetResult = this._resetResult.bind(this);
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
        bottleValue: '0'
      });
      return;
    }
    this.setState({
      bottleValue: value
    });
  }
  _resetResult() {
    this.setState({
      bottleValue: '250',
      part1Value: '1',
      part2Value: '4'
    });
  }
  componentWillMount() {
    this._resetResult();
  }
  render() {
    if(this.state.part1Value !== 0 && this.state.part2Value !== 0 && this.state.bottleValue !== 0) {
      calc = Calculate(parseInt(this.state.part1Value), parseInt(this.state.part2Value), this.state.bottleValue);
    } else {
      calc[0] = 0;
    }
    var resultOpacity = (calc[0] != 0) ? true : false;
    return (
      <View style={styles.container}>
        <PartPicker
            onFocus={this._partPickerFocus}
            val1Change={(value) => this.part1ValueChange(value)}
            val2Change={(value) => this.part2ValueChange(value)}
            part1Value={this.state.part1Value}
            part2Value={this.state.part2Value}
        />
        <View style={styles.hr} />
        <BottlePicker
            onFocus={this._bottlePickerFocus}
            bottlePickerValueChange={this.bottlePickerValueChange}
            bottleValue={this.state.bottleValue}
            />
        {resultOpacity && <Result result={calc[0]} handlePress={this._ResultViewPress} handlePressReset={this._resetResult}/>}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  text: {
    color: '#585858',
  },
  hr: {
    height:2,
    backgroundColor:'rgba(0,0,0,.1)',
  }
});

