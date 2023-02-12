// import React from "react";
// import {View} from 'react-native';

// const FixedDimensions = () => {
//   return (
//     <View>
//       <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}/>
//       <View style={{width: 250, height: 250, backgroundColor: 'skyblue'}}/>
//       <View style={{width: 350, height: 350, backgroundColor: 'steelblue'}}/>
//     </View>
//   )
// }

// export default FixedDimensions;


// import React from "react";
// import {View} from 'react-native';

// const FlexDimensions = () => {
//   return(
//     <View style={{flex: 1}}>
//       <View style={{flex: 7, backgroundColor: 'powderblue'}}/>
//       <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
//       <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
//     </View>
//   )
// }

// export default FlexDimensions;

// const PorcentageDimensions = () =>{
//   return(
//     <View style={{height: '100%'}}>
//       <View style={{height: '15%', backgroundColor: 'powderblue'}}/>
//       <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}}/>
//       <View style={{width: '50%', height: '5%', backgroundColor: 'steelblue'}}/>
//     </View>
//   )
// }

// export default PorcentageDimensions;

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white'
//   }
// });

import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

const NotificationScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}