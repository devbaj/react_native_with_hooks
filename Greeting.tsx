import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface CustomGreetingProps {
  name: string
}

class Greeting extends Component<CustomGreetingProps> {
  render() {
    return (
      <View>
        <Text>
          Hello {this.props.name}!
        </Text>
      </View>
    )
  }
}

export default class ManyGreetings extends Component {
  render() {
  return (
    <View
      style= {{
        alignItems: 'center',
        top: 50
      }}
    >
      <Greeting name='Chika' />
      <Greeting name='Kaguya'/>
      <Greeting name='Hayasaka' />
    </View>
  )}
}