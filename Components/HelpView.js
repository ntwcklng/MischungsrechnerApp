import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelpView extends Component {
  render() {
    return (
      <View style={{flex:1, padding: 20, paddingTop:30, backgroundColor:'#fbfbfb'}}>
      <ScrollView>
        <Text style={{fontSize: 18}}>
          In der Autopflege gibt es unzählige Pflegeprodukte. Einige von diesen müssen für die korrekte Anwendung mit destilliertem oder Leitungswasser verdünnt werden.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Um dir die umständliche Rechenarbeit abzunehmen, kannst du die gewünschten Mischungsverhältnisse (z.B. 1:4, 1:25 etc.) in den ersten beiden Eingabefeldern eintragen oder eines der beliebten Mischungsverhältnisse direkt auswählen.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Ergänze im letzten Eingabefeld einfach die Flaschen- bzw. Eimergröße in ml. Als kleine Hilfe haben wir dir die gängigsten Größen bereits hinterlegt.
        </Text>
        <Text style={{paddingTop: 20, fontSize: 18}}>
          Wenn du alles eingegeben hast, erscheint das gewünschte Mischungsverhältnis sofort unten im blauen Feld. Klicke auf Info um mehr über das Mischungsverhältnis zu erfahren oder lösche alle Eingaben mit dem Reset-Knopf.
        </Text>
        </ScrollView>
      </View>
    );
  }
};
