// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {LoginScreen, RegisterScreen, WellComeScreen} from '@screens';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const state = useSelector(state => state.app);
  const {isReady} = state;
  console.log('isReady', isReady);

  return (
    <Stack.Navigator>
      {isReady ? (
        <Stack.Screen name="login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="wellCome" component={WellComeScreen} />
      )}

      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
