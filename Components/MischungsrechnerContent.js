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
      bottleValue: '100',
      part1Value: '1',
      part2Value: '2',
    };
    this.part1ValueChange = this.part1ValueChange.bind(this);
    this.part2ValueChange = this.part2ValueChange.bind(this);
    this.bottlePickerValueChange = this.bottlePickerValueChange.bind(this);
    this._animateResult = this._animateResult.bind(this);
  }
  part1ValueChange(value) {
    this.setState({
      part1Value: value,
    });
  }
  part2ValueChange(value) {
    this.setState({
      part2Value: value,
    });
  }
  bottlePickerValueChange (value) {
    this.setState({
      bottleValue: value,
    });
  }
  _animateResult() {
    this.setState({animRes: true});
    setTimeout(() => {
      this.setState({animRes: false})
    }, 50);
  }

  render() {
    if(this.state.part1Value !== 0 && this.state.part2Value !== 0 && this.state.bottleValue !== 0) {
      calc = Calculate(parseInt(this.state.part1Value), parseInt(this.state.part2Value), this.state.bottleValue);
    } else {
      calc[0] = 'Ungültige Angaben.';
    }
    return (
      <View style={styles.container}>
        <PartPicker
            val1Change={(value) => this.part1ValueChange(value)}
            val2Change={(value) => this.part2ValueChange(value)}
            part1Value={this.state.part1Value}
            part2Value={this.state.part2Value}
            onClose={this._animateResult}
        />
        <View style={styles.hr} />
        <BottlePicker
            onClose={this._animateResult}
            bottlePickerValueChange={this.bottlePickerValueChange}
            bottleValue={this.state.bottleValue}
            />
        <Result startAnim={this.state.animRes} result={calc[0]} onPress={() => this._animateResult()}/>
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

