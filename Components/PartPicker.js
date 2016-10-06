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

const part1Values = [
  {value:'0', label:'eigene...'},
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

let part2Values = [{value:'0', label:'eigene...'}];

for(let i = 1; i <= 50; i++) {
  part2Values.push({value: `${i}`, label: `${i}`});
}

export default class PartPicker extends Component {
  constructor() {
    super();
    this.state = {
      part1Value: '1',
      part2Value: '4',
      modalVisible1: false,
      modalVisible2: false,
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
  render() {
    return (
      <View style={styles.container}>
        <OverViewItem
          title='Verhältnis 1'
          subtitle='Meistens ist hiermit das Produkt gemeint'
          onPress={() => this.setState({modalVisible1: true})}
          value={this.state.part1Value}
        />
        <OverViewItem
          title='Verhältnis 2'
          subtitle='Meistens ist hiermit das Wasser'
          onPress={() => this.setState({modalVisible2: true})}
          value={this.state.part2Value}
        />
        <ModalPicker
        title='Wähle das 1. Mischungsverhältnis'
        selectedValue={this.state.part1Value}
        visible={this.state.modalVisible1}
        onChangeValue={(val) => this._onValueChange1(val)}
        values={part1Values}
        onClose={() => this.setState({modalVisible1: false})}
        />
        <ModalPicker
        title='Wähle das 2. Mischungsverhältnis'
        selectedValue={this.state.part2Value}
        visible={this.state.modalVisible2}
        onChangeValue={(val) => this._onValueChange2(val)}
        values={part2Values}
        onClose={() => this.setState({modalVisible2: false})}
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
