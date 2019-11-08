import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList, ActivityIndicator, Button, TextInput } from 'react-native';

export default () => {
  const [pokeName, setPokeName] = useState('');
  const [pokeSprite, setPokeSprite] = useState('');
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(true);
  const [pokemon , setPokemon] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => {
        setPokeName(res.name);
        setPokeSprite(res.sprites.front_default);
        setInvalid(false);
        setLoading(false);
      })
    .catch(() => {
      setInvalid(true);
      setLoading(false);
    })
  }, [pokemon])

  return(
   <SafeAreaView style={{flex: 1, paddingTop: 50}}>
    <TextInput
      placeholder="Pokemon name or ID"
      onChangeText={(input) => {
        return setPokemon(input.toLowerCase());
      }}
    />
    {invalid ? <Text>Awaiting valid input...</Text> : (
      loading ? <ActivityIndicator /> : (
       <View>
        <Text>Name: {pokeName.toLocaleUpperCase()}</Text>
        <Image
          source={{uri: pokeSprite}}
          style={{height: 50, width: 50}}
        />
       </View>
      )
    )}
   </SafeAreaView>
  )
}