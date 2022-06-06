// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import UpdateScreen from './screens/updateScreen';

const Stack = createNativeStackNavigator();

function UpdateStack() {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen
        name="update"
        component={UpdateScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default UpdateStack;
