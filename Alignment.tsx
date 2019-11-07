import React from 'react';
import { View } from 'react-native';

export default function AlignItemsBasics() {
  return(
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'powderblue'
        }}
      />
      <View
        style={{
          width: 50,
          backgroundColor: 'skyblue'
        }}
      />
      <View
        style={{
          width: 50,
          backgroundColor: 'steelblue'
        }}
      />
    </View>
  )
}