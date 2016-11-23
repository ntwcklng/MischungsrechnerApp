import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import MainView from './Components/MainView'

class MischungsrechnerApp extends Component {
  render () {
    return (<MainView navigator={navigator} />)
  }
}

AppRegistry.registerComponent('MischungsrechnerApp', () => MischungsrechnerApp)
