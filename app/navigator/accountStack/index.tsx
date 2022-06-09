// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ProfileScreen from '../../screens/accountScreens/profile';

const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AccountStack;
