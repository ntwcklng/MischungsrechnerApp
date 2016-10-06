import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
const Item = Picker.Item;


export default class ModalPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible:false,
      toggleKeyboard: false,
      textInputValue: '0',
    };
    this._closeModal = this._closeModal.bind(this);
  }
  componentWillReceiveProps(next) {
    this.setState({
      modalVisible: next.visible,
    });
  }
  _closeModal() {
    this.setState({modalVisible: false})
    this.props.onClose();
  }
  render() {
    const { title, values, onChangeValue, selectedValue, close, maxLength } = this.props;
    const { modalVisible, toggleKeyboard } = this.state;
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}>
        <KeyboardAwareScrollView>
        <View style={styles.mainView}>
          <Text style={styles.text}>{title}</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(val) => {
              const showInput = (val === '0');
                this.setState({
                  toggleKeyboard: showInput,

                });
              onChangeValue(val);
              }
            }>
            {values.map((item) => {
              return <Item key={item.label} label={item.label || item.value} value={item.value} />
            })}
          </Picker>
          <View style={styles.viewContainer}>
          { toggleKeyboard && <View style={{backgroundColor: '#f7f7f7', padding: 3,}}><TextInput
            onChangeText={(val) => onChangeValue(val)}
            keyboardType='numeric'
            returnKeyType='done'
            maxLength={maxLength || 4}
            focus={toggleKeyboard}
            clearButtonMode='always'
            underlineColorAndroid='transparent'
            style={styles.input}
            value={selectedValue}
            selectTextOnFocus={true}
          /></View>}
          <TouchableOpacity
          style={styles.DoneButton}
          onPress={this._closeModal}>
            <Text style={styles.DoneButtonText}>Übernehmen</Text>
          </TouchableOpacity>
          </View>
        </View>
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f7f7f7',
    margin: 10,
    borderWidth: 0,
    height: 40,
  },
  DoneButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  DoneButton: {
    backgroundColor: '#44bcff',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#44bcff',
    marginHorizontal: 5,
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
  mainView: {
    margin: 30,
    paddingTop: 40,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
});
