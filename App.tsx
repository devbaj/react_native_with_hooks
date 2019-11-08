import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import HellowWorldApp from './HelloWorldApp';
import MisaThighs from './MisaThighs';
import ManyGreetings from './Greeting';
import BlinkApp from './Blink';
import LotsOfStyles from './Style';
import FixedDimensionBasics from './FixedDimensions';
import FlexDimensionBasics from './FlexDimensions';
import FlexDirectionBasics from './FlexDirections';
import JustifyContentBasics from './Justification';
import AlignItemsBasics from './Alignment';
import PizzaTranslator from './Input';
import ButtonBasics from './Buttons';
import Touchables from './Touchables';
import ScrollingDown from './Scrolling';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import Networking from './Networking';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HellowWorldApp /> */}
      {/* <MisaThighs /> */}
      {/* <ManyGreetings /> */}
      {/* <BlinkApp /> */}
      {/* <LotsOfStyles /> */}
      {/* <FixedDimensionBasics /> */}
      {/* <FlexDimensionBasics /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <JustifyContentBasics /> */}
      {/* <AlignItemsBasics /> */}
      {/* <PizzaTranslator /> */}
      {/* <ButtonBasics /> */}
      {/* <Touchables /> */}
      {/* <ScrollingDown /> */}
      {/* <FlatListBasics /> */}
      {/* <SectionListBasics /> */}
      <Networking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
