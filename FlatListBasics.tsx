import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default function FlatListBasics() {
  return(
    <View
      style={styles.container}
    >
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Chika'},
          {key: 'Hayasaka'},
          {key: 'Kaguya'},
          {key: 'Miko'},
          {key: 'Ryuuko'},
          {key: 'Akko'},
          {key: 'Diana'},
          {key: 'Amanda'},
          {key: 'Satsuki'},
          {key: 'Yuu'},
          {key: 'Touko'},
          {key: 'Ichika'},
          {key: 'Nino'},
          {key: 'Miku'},
          {key: 'Yotsuba'},
          {key: 'Itsuki'},
          {key: 'Asuna'},
          {key: 'Saber'},
          {key: 'Irisviel'},
          {key: 'Ilyasviel'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.key}</Text>
        )}
      ></FlatList>
    </View>
  )
}