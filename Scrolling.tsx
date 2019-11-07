import React from 'react';
import { ScrollView, Text, Image } from 'react-native';

export default function ScrollingDown() {
  const img = {
    uri: 'https://i.imgur.com/2imwOpV.png',
    height: 64,
    width: 64,
  }

  return(
    <ScrollView>
      <Text
        style={{
          fontSize: 96
        }}
      >
        Scroll me please
      </Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Text
        style={{
          fontSize: 96
        }}
      >
        If you like
      </Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Text
        style={{
          fontSize: 96
        }}
      >
        Scrolling down
      </Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Text
        style={{
          fontSize: 96
        }}
      >
        What's the best
      </Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Text
        style={{
          fontSize: 96
        }}
      >
        Framework around?
      </Text>
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Image source={img} />
      <Text
        style={{
          fontSize: 96
        }}
      >
        React Native!
      </Text>

    </ScrollView>
  )
}