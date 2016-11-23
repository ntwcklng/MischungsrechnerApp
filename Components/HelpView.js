import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class HelpView extends Component {
  render () {
    return (
      <View style={{flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fbfbfb'}}>
        <ScrollView>
          <Text style={{fontSize: 18, fontFamily: 'System'}}>
            In der Autopflege gibt es unzählige Pflegeprodukte. Einige von diesen müssen für die korrekte Anwendung mit destilliertem oder Leitungswasser verdünnt werden.
          </Text>
          <Text style={{paddingTop: 20, fontSize: 18, fontFamily: 'System'}}>
            Um dir die umständliche Rechenarbeit abzunehmen, kannst du die gewünschten Mischungsverhältnisse (z.B. 1:4, 1:25 etc.) in den ersten beiden Eingabefeldern eintragen
            oder eines der beliebten Mischungsverhältnisse direkt auswählen.
          </Text>
          <Text style={{paddingTop: 20, fontSize: 18, fontFamily: 'System'}}>
            Ergänze im letzten Eingabefeld einfach die Flaschen- bzw. Eimergröße in ml. Als kleine Hilfe haben wir dir die gängigsten Größen bereits hinterlegt.
          </Text>
          <Text style={{paddingTop: 20, fontSize: 18, fontFamily: 'System'}}>
            Wenn du alles eingegeben hast, erscheint das gewünschte Mischungsverhältnis sofort unten im blauen Feld.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
