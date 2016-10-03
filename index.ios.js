/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Result from './Components/Result';
import HelpView from './Components/HelpView';
import DefaultView from './Components/MainView';
import ResultView from './Components/ResultView';

const MischungsrechnerApp = React.createClass({
  onRightButtonPress: function() {
    this.refs.nav.push({
      title: 'Hilfe',
      component: HelpView
    });
  },
  render: function() {
    return (
        <NavigatorIOS
            ref='nav'
            style={{flex: 1}}
            barTintColor='#44bcff'
            tintColor='#585858'
            titleTextColor='#585858'
            itemWrapperStyle={{backgroundColor: '#fbfbfb', padding: 20,}}
            initialRoute={{
              title: 'Mischungsrechner',
              component: DefaultView,
              rightButtonTitle: 'Hilfe',
              onRightButtonPress: this.onRightButtonPress
            }}
        />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MischungsrechnerApp', () => MischungsrechnerApp);
