import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default function ButtonBasics() {

  function handleClick(e) {
    alert('You tapped the button!')
    return
  }

  return(
    <View
      style={styles.container}
    >
      <View
       style={styles.buttonContainer}
      >
        <Button
          onPress={(e) => handleClick(e)}
          title='Press Me'
        />
      </View>
      <View
        style={styles.buttonContainer}
      >
        <Button
          onPress={(e) => handleClick(e)}
          title='Press Me'
          color='#841584'
        />
      </View>
      <View
        style={styles.alternativeLayoutButtonContainer}
      >
        <Button
          onPress={(e) => handleClick(e)}
          title='This looks great!'
        />
        <Button
          onPress={(e) => handleClick(e)}
          title="Ok!"
          color='#841584'
        />
      </View>
    </View>
  )
}