import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Styles from '../Styles/BottlePicker';

const Item = Picker.Item;

import HorizontalPicker from './HorizontalPicker';
import ModalPicker from './ModalPicker';


const bottleValues = [
  { label: '100ml', value: '100'},
  { label: '250ml', value: '250'},
  { label: '473ml', value: '473'},
  { label: '500ml', value: '500'},
  { label: '1000ml', value: '1000'},
  { label: '15 Liter', value: '15000'},
  { label: '20 Liter', value: '20000'},
];
export default class BottlePicker extends Component {
  constructor() {
    super();
    this.state = {
      bottleValue: '250',
      modalVisible: false
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
          {/*<Text style={Styles.text}>Flaschen- bzw. Eimergröße in ml</Text>
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
          <Text style={Styles.text}>Häufig genutzte Größen</Text>*/}
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}><Text style={{fontSize: 20}}>Flaschengröße ausgewählt: {this.state.bottleValue}ml</Text></TouchableOpacity>
          <ModalPicker
            title='Wähle deine Flaschengröße'
            selectedValue={this.state.bottleValue}
            visible={this.state.modalVisible}
            onChangeValue={(val) => this.setState({bottleValue: val})}
            values={bottleValues}
          />
          {/*<HorizontalPicker items={this.state.values} onPress={(val) => this._onValueChange(val)} />*/}
        </View>
    );
  }
};
