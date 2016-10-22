import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import OverViewItem from './OverviewItem';
import ModalPicker from './ModalPicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SlideUpAndShowItem from './SlideUpAndShowItem';

const part1Values = [
  {value:'', label:'eigene...'},
  {value:'1', label:'1'},
  {value:'2', label:'2'},
  {value:'3', label:'3'},
  {value:'4', label:'4'},
  {value:'5', label:'5'},
  {value:'6', label:'6'},
  {value:'7', label:'7'},
  {value:'8', label:'8'},
  {value:'9', label:'9'},
  {value:'10', label:'10'},
];

let part2Values = [{value:'', label:'eigene...'}];

for(let i = 1; i <= 50; i++) {
  part2Values.push({value: `${i}`, label: `${i}`});
}

export default class PartPicker extends Component {
  constructor() {
    super();
    this.state = {
      part1Value: '1',
      part2Value: '2',
      modalVisible1: false,
      modalVisible2: false,
    };
    this._onValueChange1 = this._onValueChange1.bind(this);
    this._onValueChange2 = this._onValueChange2.bind(this);
  }
  componentWillReceiveProps(next) {
    this.setState({
      part1Value: next.part1Value,
      part2Value: next.part2Value,
    });
  }
  _onValueChange1(value) {
    // if(!value.match(/\d/g)) { value = ''; }
    this.setState({part1Value: value});
    this.props.val1Change(value);
  }
  _onValueChange2(value) {
    // if(!value.match(/\d/g)) { value = ''; }
    this.setState({part2Value: value});
    this.props.val2Change(value);
  }
  render() {
    return (
      <View style={styles.container}>
        <SlideUpAndShowItem delay={0}><OverViewItem
          title='1. Teil'
          subtitle='Produkt'
          onPress={() => this.setState({modalVisible1: true})}
          value={this.state.part1Value}
        /></SlideUpAndShowItem>
        <SlideUpAndShowItem delay={50}><OverViewItem
          title='2. Teil'
          subtitle='Wasser'
          onPress={() => this.setState({modalVisible2: true})}
          value={this.state.part2Value}
        /></SlideUpAndShowItem>
        <ModalPicker
        title='Meistens ist hiermit das Produkt bzw. das erste Mischungsverhältnis gemeint.'
        subTitle='1:4 = 1 Teil Produkt, 4 Teile Wasser.'
        selectedValue={this.state.part1Value}
        visible={this.state.modalVisible1}
        onChangeValue={(val) => this._onValueChange1(val)}
        values={part1Values}
        onClose={() => {this.setState({modalVisible1: false}); this.props.onClose()}}
        inputPlaceholder='1. Teil'
        />
        <ModalPicker
        title='Das 2. Verhältnis beschreibt in der Regel den Wasseranteil der Mischung.'
        subTitle='1:4 = 1 Teil Produkt, 4 Teile Wasser.'
        selectedValue={this.state.part2Value}
        visible={this.state.modalVisible2}
        onChangeValue={(val) => this._onValueChange2(val)}
        values={part2Values}
        onClose={() => {this.setState({modalVisible2: false}); this.props.onClose()}}
        inputPlaceholder='2. Teil'
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  horizontalBtns: {
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#44bcff',
  },
  container: {
    paddingTop: 0,
    paddingBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#44bcff',
    height: 40,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    fontFamily: 'System',
    fontSize: 14,
  },
  text: {
    textAlign:'center',
    fontFamily: 'System',
    fontSize: 18,
    marginBottom: 5,
    color: '#585858'
  }
});
