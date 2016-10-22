import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Result extends Component {
  constructor() {
    super();
    this._animatedResult = this._animatedResult.bind(this);
  }
  _animatedResult() {
    this.refs.resultView.rubberBand(800);
  }
  render() {
    return (
      <TouchableWithoutFeedback style={{flex:1}} onPress={() => this._animatedResult()}>
        <Animatable.View style={styles.results} ref="resultView">
            <Text style={styles.resultText}>{this.props.result}</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
  componentWillReceiveProps(next) {
    if (next.startAnim) {
      this._animatedResult();
    }
  }
};
const styles = StyleSheet.create({
  results: {
    backgroundColor: '#44bcff',
    paddingVertical: 15,
    marginBottom: 8,
    borderRadius: 7,
  },
  resultText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'System',
    fontSize: 26,
  },
});
