import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import MischungsrechnerContent from './MischungsrechnerContent';

export default class DefaultView extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1}}>
        <ScrollView keyboardShouldPersistTaps={false} ref='scrollView'>
          <MischungsrechnerContent navi={this.props.navigator} />
        </ScrollView>
      </View>
    );
  }
};
