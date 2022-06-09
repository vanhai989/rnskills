// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import homeScreen from '../../screens/app/homeScreen';
import {Routers} from '../routers';
import CreatePostScreen from '../../screens/app/createPostScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
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
