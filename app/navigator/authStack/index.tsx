// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {LoginScreen, RegisterScreen, WellComeScreen} from '@screens';
import {Routers} from '../../navigator/routers';
import AppStack from '../appStack';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const state = useSelector(state => state.app);
  const {isReady} = state;
  console.log('isReady', isReady);

  return (
    <Stack.Navigator>
      {isReady ? (
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
        // <Stack.Screen name={Routers.HomeStack} component={AppStack} options={{headerShown: false}} />
      ) : (
        <Stack.Screen name="wellCome" component={WellComeScreen} options={{headerShown: false}} />
      )}

      <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
