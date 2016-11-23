import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import MischungsrechnerContent from './MischungsrechnerContent'

export default class DefaultView extends Component {

  render () {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView ref='scrollView'>
          <MischungsrechnerContent navigator={this.props.navigator} />
        </ScrollView>
      </View>
    )
  }
};
