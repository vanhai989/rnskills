// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import homeScreen from './screens/homeScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="bottom">
      <Stack.Screen
        name="home"
        component={homeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
