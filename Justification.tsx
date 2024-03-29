import React from 'react';
import { View } from'react-native';

export default function JustifyContentBasics() {
  return(
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue'
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'skyblue'
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'steelblue'
        }}
      />
    </View>
  )
}