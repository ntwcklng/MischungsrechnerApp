
import Styles from '../Styles/ResultView';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ResultView extends Component {
  render() {
    var part1InML = this.props.result.split(':')[0];
    var part2InML = this.props.result.split(':')[1];
    var flex1 = parseInt(this.props.part1);
    var flex2 = parseInt(this.props.part2);
    if(flex2 >= 30 && flex1 <= 2) {
      flex2 = 20;
    }
    return (
      <View style={Styles.container}>
      <Text style={{marginBottom: 10, fontSize: 18, marginTop: 20}}>Dein Mischungsverhältnis ist {this.props.result} auf einer Flaschen bzw. Eimergröße von {parseInt(this.props.bottle)}ml.</Text>
        <View style={{flex: flex1, backgroundColor: '#44bcff', justifyContent:'center', marginBottom: 2, padding:5}}>
          <Text style={Styles.partText}>{part1InML} ({this.props.part1})</Text>
        </View>
        <View style={{flex: flex2, backgroundColor: '#656565', justifyContent:'center', padding:5}}>
          <Text style={Styles.partText}>{part2InML} ({this.props.part2})</Text>
        </View>

      </View>
    );
  }
};
