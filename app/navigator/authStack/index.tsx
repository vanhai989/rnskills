// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import loginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import WellComeScreen from './screens/wellComeScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="wellCome" component={WellComeScreen} />
      <Stack.Screen name="login" component={loginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
