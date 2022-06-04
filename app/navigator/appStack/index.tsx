// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import BottomStack from '../bottomStack';
import homeScreen from './screens/homeScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNavigator"
        component={homeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
