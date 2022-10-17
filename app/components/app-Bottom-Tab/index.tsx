// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard, Platform, Text} from 'react-native';

import {get} from 'lodash';
import {Images, Styles, theme, Color} from '@common';
import {AppButton, AppView} from '@components';
import {Routers} from '@routers';
import {useSelector} from 'react-redux';

const {
  HomeIcon,
  HomeIconActive,
  AccountIcon,
  AccountIconActive,
  MoreIcon,
  MoreIconActive,
} = Images;

function AppTabBottom({state, descriptors, navigation}) {
  const [show, setShow] = useState(true);
  const isShowTabBar = useSelector(state => state?.app?.isShowTabBar);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setShow(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setShow(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  // const focusedOptions = descriptors[state.routes[state.index].key].options;

  // if (focusedOptions.tabBarVisible === false) {
  //   return null;
  // }

  const renderBottomButton = (route, index) => {
    const {options} = descriptors[route.key];
    const label = get(
      options,
      ['tabBarLabel'],
      get(options, ['title'], get(options, ['name'], '')),
    );

    const stackName = route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(stackName);
      }
    };

    let iconApp;
    const fillColor = isFocused
      ? theme.COLORS.tabbarActiveTint
      : theme.COLORS.tabbarColor;

    switch (stackName) {
      case Routers.HomeStack:
        iconApp = isFocused ? <HomeIconActive /> : <HomeIcon />;
        break;
      case Routers.AccountStack:
        iconApp = isFocused ? <AccountIconActive /> : <AccountIcon />;
        break;
      case Routers.MoreStack:
        iconApp = isFocused ? <MoreIconActive /> : <MoreIcon />;
        break;
    }

    return (
      <AppButton
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        appStyle="flex1 aliC"
        style={{justifyContent: 'center'}}>
        {/* <AppView appStyle="jusC" height={22}>
          {iconApp}
        </AppView> */}
        <View>{iconApp}</View>
        {/* <AppText appStyle="size12 w500" bound color={fillColor}>
          {label}
        </AppText> */}
        {/* <Text style={{paddingBottom: 5}}>{label}</Text> */}
      </AppButton>
    );
  };

  if (!show || !isShowTabBar) {
    return <AppView />;
  }
  return (
    <View style={styles.viewContainer}>
      {state.routes.map(renderBottomButton)}
    </View>
  );
}

export default AppTabBottom;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: '#d3dbde',

    height:
      Platform.OS === 'ios'
        ? Styles.Common.specifications.bottomNavbarHeight +
          Styles.Common.specifications.bottomSpaceHeight
        : Styles.Common.specifications.bottomNavbarHeight,
  },
  viewSafe: {
    backgroundColor: Color.white,
  },
});
