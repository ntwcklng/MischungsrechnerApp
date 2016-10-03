
import Styles from '../Styles/PartPicker';
import GlobalStyle from '../Styles/GlobalStyle';
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


export default class HorizontalPicker extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress(val) {
    this.props.onPress(val);
  }
  render() {
    const {items, onPress} = this.props;
    return (
        <View style={GlobalStyle.container}>
          <ScrollView horizontal={true}>
          {items.map((i) => {
              return (
                <TouchableOpacity key={i} style={GlobalStyle.horizontalBtns} onPress={() => this._onPress(i)}>
                  <Text style={GlobalStyle.horizontalScollText}>{i}</Text>
                </TouchableOpacity>
              )
          })}
          </ScrollView>
        </View>
    );
  }
};
