import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OverViewItem extends Component {
  render() {
    const { title, subtitle, onPress, value } = this.props;
    let showValue = value;
    if( value >= 10000 ) {
      showValue = (value/1000) + 'l'
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
          <View style={{flex:.6, margin: 20}}>
            <Text style={{color: '#585858', fontWeight: 'bold', fontSize: 22}}>{title}</Text>
            <Text style={{color: '#878787', fontSize: 16}}>{subtitle}</Text>
          </View>
          <View style={styles.stateText}>
            <Text style={styles.valueText}>{showValue}</Text>
          </View>
          <View style={{flex:.1}}>
            <View>
              <Icon style={styles.editButton} name='pencil-square-o' size={20} color='#889eac' />
            </View>
          </View>
        </TouchableOpacity>
    );
  }
};
const styles = StyleSheet.create({
  valueText:{
    textAlign: 'center',
    color: '#44bcff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    marginBottom: 5,
  },
  stateText: {
    justifyContent:'center',
    alignSelf: 'center',
    flex:.2,
    borderWidth: 1,
    padding: 5,
    borderColor: '#dddddd',
    backgroundColor: '#f0f0f0',
  },
});
