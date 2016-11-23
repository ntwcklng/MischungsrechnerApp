import React, { Component } from 'react'
import {
  View // eslint-disable-line no-unused-vars
} from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class SlideUpAndShowItem extends Component {
  render () {
    return (
      <Animatable.View
        delay={this.props.delay}
        animation='fadeInUpBig'
        easing='ease-out'
        duration={600}
        >
        {this.props.children}
      </Animatable.View>
    )
  }
};
