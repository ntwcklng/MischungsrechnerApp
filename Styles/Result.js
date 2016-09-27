import React from 'react';
import {
  StyleSheet,
} from 'react-native';

var metaFontSize = 15;
var resultButtonPadding = 25;

export default Style = StyleSheet.create({
  container: {
    backgroundColor: '#44bcff',
    paddingTop: resultButtonPadding,
    paddingBottom: resultButtonPadding,
  },
  results: {
    backgroundColor: '#44bcff',
    marginBottom: 8,
    paddingTop: 15,
    paddingBottom: 15
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: metaFontSize
  },
  resultText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26
  },
  resetText: {
    color: '#44bcff',
    textAlign: 'center',
    fontSize: metaFontSize
  },
  resetButton: {
    borderWidth: 1,
    borderColor: '#44bcff',
    padding: 10,
    marginRight: 8,
    flex:1
  },
  infoButton: {
    backgroundColor:'#44bcff',
    padding: 10,
    marginRight: 0,
    flex:1
  },
  metaView: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'center'
  }
});

