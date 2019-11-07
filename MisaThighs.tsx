import React from 'react';
import { Image } from 'react-native';

export default function MisaThighs() {
  let pic = {
    uri: 'https://i.imgur.com/VbTrRQd.png',
  };

  return (
    <Image
      source={pic}
      style={{
        width: 193,
        height: 110,
        top: 25
      }}
    />
  )
}