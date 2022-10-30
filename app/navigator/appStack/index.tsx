// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen, CreatePostScreen, VideoCall} from '@screens';
import {Routers} from '../routers';

const Stack = createNativeStackNavigator();

function AppStack() { 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routers.CreatePost}
        component={CreatePostScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routers.VideoCall}
        component={VideoCall}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
