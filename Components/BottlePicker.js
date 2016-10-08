import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';

import OverViewItem from './OverviewItem';
import ModalPicker from './ModalPicker';

const bottleValues = [
  { label: 'eigene...', value: ''},
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
      bottleValue: '100',
      modalVisible: false
    };
    this._onValueChange = this._onValueChange.bind(this);
  }
  componentWillReceiveProps(next) {
    this.setState({
      bottleValue: next.bottleValue,
    });
  }
  _onValueChange(value) {
    this.setState({
      bottleValue: value
    });
    this.props.bottlePickerValueChange(value);
  }
  render() {
    const bottleUnit = (this.state.bottleValue >= 10000) ? 'Liter' : 'ml';
    return (
        <View style={[styles.container]}>
          <OverViewItem
            title='Flaschengröße'
            subtitle={`Fassungsvermögen Flasche/Eimer in ${bottleUnit}`}
            onPress={() => this.setState({modalVisible: true})}
            value={this.state.bottleValue}
          />
          <ModalPicker
            title='Wähle deine Flaschen- bzw. Eimergröße'
            selectedValue={this.state.bottleValue}
            visible={this.state.modalVisible}
            onChangeValue={(val) => this._onValueChange(val)}
            values={bottleValues}
            onClose={() => {this.setState({modalVisible: false}); this.props.onClose()}}
            maxLength={5}
            inputPlaceholder='Flaschengröße in ml'
          />
        </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 10,
    marginBottom: 20
  }
});