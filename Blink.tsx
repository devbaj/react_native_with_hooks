import React, { Component, useEffect, useState, FunctionComponent } from 'react';
import { View, Text } from 'react-native';

interface BlinkCustomProps {
  text: string
}

const Blink:FunctionComponent<BlinkCustomProps> = (props) => {
  const [ isShowing, setIsShowing ] = useState(true);

  setInterval(() => {
    setIsShowing(!isShowing)
  }, 1000);

  if (!isShowing) {
    return null;
  } else {
    return(
      <Text>{props.text}</Text>
    )
  }
}

export default function BlinkApp() {
  return(
    <View>
      <Blink text='I love to blink' />
      <Blink text='Yes, blinking is so great' />
      <Blink text='Why did they ever take this out of HTML?' />
      <Blink text='Look at me! Look at me! Look at me!' />
    </View>
  )
}