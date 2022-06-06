// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AppStack from '../appStack';
// import AccountStack from '../accountStack';
// import UpdateStack from '../updateStack';

// const Tab = createBottomTabNavigator();

// const RootStack = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="appStack"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}>
//       <Tab.Screen
//         name="appStack"
//         component={AppStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="updateStack"
//         component={UpdateStack}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="accountStack"
//         component={AccountStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default RootStack;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabBottom} from '../../components';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack from '../appStack';
import AccountStack from '../accountStack';
import UpdateStack from '../updateStack';
import {Routers} from '../../navigator/routers';
import {Styles, Images, theme} from '../../common';
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
} = Images;
const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <AppTabBottom {...props} />}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === Routers.HomeStack) {
            icon = focused ? <HomeIconActive /> : <HomeIcon />;
          } else if (route.name === Routers.AccountStack) {
            icon = focused ? <AccountIconActive /> : <AccountIcon />;
          } else if (route.name === Routers.MoreStack) {
            icon = focused ? <MoreIconActive /> : <MoreIcon />;
          }
          return icon;
        },
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
        name={Routers.AccountStack}
        component={UpdateStack}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.MoreStack}
        component={AccountStack}
        options={{
          tabBarLabel: 'More',
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
