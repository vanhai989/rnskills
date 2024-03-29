import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabBottom} from '@components';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack from '../appStack';
import AccountStack from '../accountStack';
import UpdateStack from '../updateStack';
import {Routers} from '../../navigator/routers';
import {Styles, Images, theme} from '@common';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {Platform} from 'react-native';
export type AuthenticatedParamsList = {
  [Routers.HomeStack]: undefined;
  [Routers.AccountStack]: undefined;
  [Routers.MoreStack]: undefined;
};
const Tab = createBottomTabNavigator<AuthenticatedParamsList>();
const Stack = createStackNavigator();
const {
  HomeIcon,
  HomeIconActive,
  AccountIcon,
  AccountIconActive,
  MoreIcon,
  MoreIconActive,
  bellIcon,
} = Images;
const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <AppTabBottom {...props} />}
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused}) => {
        //   let icon;
        //   if (route.name === Routers.HomeStack) {
        //     icon = focused ? <HomeIconActive /> : <HomeIcon />;
        //   } else if (route.name === Routers.AccountStack) {
        //     icon = focused ? <AccountIconActive /> : <AccountIcon />;
        //   } else if (route.name === Routers.MoreStack) {
        //     icon = focused ? <MoreIconActive /> : <MoreIcon />;
        //   }
        //   return icon;
        // },
        tabBarActiveTintColor: theme.COLORS.tabbarActiveTint,
        tabBarInactiveTintColor: theme.COLORS.tabbarColor,
        tabBarStyle: {
          height:
            Platform.OS == 'ios'
              ? Styles.Common.specifications.bottomNavbarHeight +
                Styles.Common.specifications.bottomSpaceHeight
              : Styles.Common.specifications.bottomNavbarHeight,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: theme.SIZES.FONT_SIZE_TINY,
          fontFamily: 'Inter',
          fontWeight: '500',
          flex: 1,
        },
      })}>
      <Tab.Screen
        name={Routers.HomeStack}
        component={AppStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.MoreStack}
        component={UpdateStack}
        options={{
          tabBarLabel: 'Notification',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.AccountStack}
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const RootStack = () => {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Root" component={AuthenticatedTabs} />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
};

export default RootStack;
