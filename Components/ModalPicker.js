import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
const Item = Picker.Item;

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ModalPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible:false,
      toggleKeyboard: false,
    };
    this._closeModal = this._closeModal.bind(this);
  }
  componentWillReceiveProps(next) {
    this.setState({
      modalVisible: next.visible,
    });
  }
  _closeModal() {
    if (this.props.selectedValue === '' || this.props.selectedValue === '0') {
      return Alert.alert('Fehler', 'Bitte trage eine Zahl in das Eingabefeld ein.', [
        {text: 'OK', onPress: () => this.refs.inputValue.focus()}
      ]);
    }
    this.setState({modalVisible: false})
    this.props.onClose();
  }
  render() {
    const { title, subTitle, values, onChangeValue, selectedValue, close, maxLength, inputPlaceholder } = this.props;
    const { modalVisible, toggleKeyboard } = this.state;
    return (
      <Modal
        onRequestClose={this._closeModal}
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}>
        <KeyboardAwareScrollView>
        <View style={styles.mainView}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.textSub}>{subTitle}</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(val) => {
              const showInput = (val === '');
              this.setState({toggleKeyboard: showInput});
              onChangeValue(val);
              if (val === '') this.refs.inputValue.focus();
              }
            }>
            {values.map((item) => {
              return <Item key={item.label} label={item.label || item.value} value={item.value} />
            })}
          </Picker>
          <View style={styles.viewContainer}>
          <Icon name='chevron-down' color='#44bcff' size={25} style={{alignSelf: 'center', margin: 5,}} />
          { true && <View style={{backgroundColor: '#f7f7f7', padding: 2,}}><TextInput
            onChangeText={(val) => onChangeValue(val)}
            keyboardType='numeric'
            returnKeyType='done'
            maxLength={maxLength || 4}
            clearButtonMode='always'
            underlineColorAndroid='transparent'
            style={styles.input}
            value={selectedValue}
            selectTextOnFocus={true}
            ref='inputValue'
            placeholder={inputPlaceholder}
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
    margin: 4,
    borderWidth: 0,
    height: 40,
    color: '#585858',
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
    color: '#585858',
  },
  textSub: {
    fontSize: 16,
    color: '#757575',
  },
  mainView: {
    margin: 25,
    paddingTop: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
});
