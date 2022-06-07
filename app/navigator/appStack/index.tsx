// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import homeScreen from './screens/homeScreen';
import {Routers} from '../routers';
import CreatePostScreen from './screens/createPostScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="bottom">
      <Stack.Screen
        name="home"
        component={homeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routers.CreatePost} component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
