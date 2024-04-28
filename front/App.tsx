import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {StyleSheet} from 'react-native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
