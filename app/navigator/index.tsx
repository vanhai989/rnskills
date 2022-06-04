// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppStack from './appStack';
import AuthNavigator from './authStack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const state = useSelector(state => state.auth);
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="authNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
}

export default AppNavigator;
