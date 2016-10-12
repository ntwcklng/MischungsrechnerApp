import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      scale: new Animated.Value(0),
      rotate: new Animated.Value(0),
    };
  }
  _animatedResult() {
    this.state.scale.setValue(1);
    this.state.rotate.setValue(0);
    Animated.sequence([
      Animated.timing(this.state.scale, {delay: 130, toValue: 1.2, duration: 50}),
      Animated.timing(this.state.rotate, {delay: 0, toValue: 1.5, duration: 50}),
      Animated.parallel([
        Animated.spring(
          this.state.scale, {toValue: 1, friction: 6, tension: 110,}
        ),
        Animated.spring(
          this.state.rotate, {toValue: 0, friction: 4, tension: 110,}
        )
      ])
    ]).start();

  }
  render() {
    const interpolatedRotateAnim = this.state.rotate.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={{flex:1}}>
        <Animated.View style={
          [styles.results,
          {transform: [{scale: this.state.scale}, {rotate: interpolatedRotateAnim}]
          }]}>
          <TouchableOpacity onPress={() => this.props.onPress()}><Text style={styles.resultText}>{this.props.result}</Text></TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
  componentWillReceiveProps(next) {
    if (next.startAnim) {
      this._animatedResult();
    }
  }
  componentDidMount() {
    this._animatedResult();
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
