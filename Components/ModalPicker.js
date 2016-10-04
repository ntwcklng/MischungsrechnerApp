import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Styles from '../Styles/BottlePicker';

const Item = Picker.Item;

import HorizontalPicker from './HorizontalPicker';



export default class BottlePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible
    };
  }
  componentWillReceiveProps(next) {
    this.setState({
      modalVisible: next.visible,
    });
  }
  render() {
    const { title, values, onChangeValue, selectedValue } = this.props;
    return (
      <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible}>
        <ScrollView style={styles.mainScrollView}>
          <Text style={styles.text}>{title}</Text>
          <Picker selectedValue={selectedValue} onValueChange={(val) =>  onChangeValue(val)}>
            {values.map((item) => {
              item.label = item.label || item.value;
              return (
                <Item label={item.label} value={item.value} />
              );
            })}
          </Picker>
          <View style={styles.viewContainer}>
          <TouchableOpacity
          style={styles.DoneButton}
          onPress={() => this.setState({modalVisible: false})}>
            <Text style={styles.DoneButtonText}>Fertig</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  DoneButtonText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  DoneButton: {
    backgroundColor: '#44bcff',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#44bcff',
    marginHorizontal: 30,
    marginVertical: 20
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 20,
  },
  mainScrollView: {
    margin: 30,
    paddingTop: 40,
    flex: 1,
  },
  TonnenDesc: {
    marginTop: 15,
    color: '#585858',
    textAlign: 'center',
  },
  ImgBtn: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  TonnenButton: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
});
