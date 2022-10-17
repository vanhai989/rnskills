// In App.js in a new project

import * as React from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import RootStack from './rootStack';
import AuthNavigator from './authStack';
import {NavigationContainer} from '@react-navigation/native';
import {isEmpty} from 'lodash';
import {View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Routers} from '@routers';
import {AppIndicator} from '@components';

export type RootNavigationParamsList = {
  [Routers.authNavigator]: undefined;
  [Routers.RootStack]: undefined;
};
const Stack = createStackNavigator<RootNavigationParamsList>();

function AppNavigator() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const state = useSelector(state => state.auth);
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };

  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent>
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
          {isEmpty(state.token) ? (
            <Stack.Screen
              name="authNavigator"
              component={AuthNavigator}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name={Routers.RootStack}
              component={RootStack}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <AppIndicator />
    </View>
  );
}

export default AppNavigator;
