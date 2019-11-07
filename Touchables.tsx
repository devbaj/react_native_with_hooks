import React from 'react';
import { Platform, StyleSheet, View, TouchableHighlight, Text,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, }
  from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  }
})

export default function Touchables() {
  function handlePress(e) {
    alert('You tapped the button!');
  }

  function handleLongPress(e) {
    alert('You long-pressed the button');
  }

  return(
    <View
      style={styles.container}
    >
      <TouchableHighlight
        onPress={e => handlePress(e)}
        underlayColor='white'
      >
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            TouchableHighlight
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={e => handlePress(e)}
      >
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            TouchableOpacity
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={e => handlePress(e)}
        background={
          Platform.OS === 'android' ?
            TouchableNativeFeedback.SelectableBackground() : null
        }
      >
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            TouchableNativeFeedback
            {Platform.OS !== 'android' ? '(Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback
        onPress={e => handlePress(e)}
      >
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            TouchableWithoutFeedback
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={e => handlePress(e)}
        onLongPress={e => handleLongPress(e)}
        underlayColor='white'
      >
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            Touchable with Long Press
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  )

}