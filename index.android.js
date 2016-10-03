import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid,
  TouchableOpacity,
  ToolbarAndroid,
} from 'react-native';

import MainView from './Components/MainView';
import Result from './Components/ResultView';


class MischungsrechnerApp extends Component {
  navigationRenderScene(route, navigator) {
    _navigator = navigator;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (_navigator.getCurrentRoutes().length === 1) return false;
      _navigator.pop();
      return true;
    });
    switch (route.id) {
      case 'init':
        return (<MainView navigator={navigator} />);
      case 'result':
        return (<Result result={route.passProps.result} bottle={route.passProps.bottle} part1={route.passProps.part1} part2={route.passProps.part2} navigator={navigator} />);
    }
  }
  render() {
    const routes = [
      { id: 'init', index: 0},
      { id: 'result', index: 1}
    ];
    const NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if(index === 0) {
          return null;
        }
        const previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <Text style={{margin:10}}>◀ Zurück</Text>
          </TouchableOpacity>
        );
      },
      RightButton: (route, navigator, index, navState) => {
        return null;
      },
      Title: (route, navigator, index, navState) => {
        return null;
      }
    }
    return (
      <Navigator
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        }
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump
        }
        ref='nav'
        initialRoute={routes[0]}
        renderScene={this.navigationRenderScene}
        style={{flex: 1, backgroundColor: '#fbfbfb'}}
        barTintColor='#44bcff'
        tintColor='#f6f6f6'
        titleTextColor='#FFFFFF'
        sceneStyle={{margin: 20}}
        />
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    margin: 10,
  },

});

AppRegistry.registerComponent('MischungsrechnerApp', () => MischungsrechnerApp);
