import React from 'react';
import { ScrollView, Text, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Iron Man</Text>
      <Image source={require('./assets/IronMan.png')} style={{ width: 300, height: 300 }}/>
      <Text>Thor</Text>
      <Image source={require('./assets/Thor.png')} style={{ width: 300, height: 300 }}/>
      <Text>Captain America</Text>
      <Image source={require('./assets/Captain.png')} style={{ width: 300, height: 300 }}/>
      <Text>Hulk</Text>
      <Image source={require('./assets/Hulk.png')} style={{ width: 300, height: 300 }}/>
      <Text>Black Widow</Text>
      <Image source={require('./assets/BlackWidow.png')} style={{ width: 300, height: 300 }}/>
      <Text>Hawkeye</Text>
      <Image source={require('./assets/Hawkeye.png')} style={{ width: 300, height: 300 }}/>
    </ScrollView>
  );
}