import React from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'

import HelpView from './Components/HelpView'
import DefaultView from './Components/MainView'

const MischungsrechnerApp = React.createClass({
  onRightButtonPress: function () {
    this.refs.nav.push({
      title: 'Hilfe',
      component: HelpView
    })
  },
  render: function () {
    return (
      <NavigatorIOS
        ref='nav'
        style={{flex: 1}}
        barTintColor='#44bcff'
        tintColor='#585858'
        titleTextColor='#585858'
        itemWrapperStyle={{backgroundColor: '#fbfbfb', padding: 10}}
        initialRoute={{ title: 'Mischungsrechner', component: DefaultView, rightButtonTitle: 'Hilfe', onRightButtonPress: this.onRightButtonPress }} />
    )
  }
})

AppRegistry.registerComponent('MischungsrechnerApp', () => MischungsrechnerApp)
