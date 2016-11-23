import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import MischungsrechnerContent from './MischungsrechnerContent'

export default class DefaultView extends Component {

  render () {
    return (
      <View style={{flex: 1, padding: 10 }}>
        <ScrollView ref='scrollView'>
          <Text style={styles.textHeader}>Mischungsrechner</Text>
          <MischungsrechnerContent navigator={this.props.navigator} />
        </ScrollView>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#44bcff',
    textAlign: 'center',
    marginVertical: 7
  }
})
