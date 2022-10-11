// @ts-nocheck
import {GalioProvider} from 'galio-framework';
import React from 'react';
import {LogBox} from 'react-native';
import ignoreWarnings from 'ignore-warnings';
import {Provider} from 'react-redux';
import AppNavigator from './app/navigator';
import store from './config/reduxConfig/store';
import {theme} from '@common';
import {Text, TextInput} from 'react-native';
import codePush from "react-native-code-push";

Text.defaultProps = {};
TextInput.defaultProps = {};

TextInput.defaultProps.allowFontScaling = false;
Text.defaultProps.allowFontScaling = false;
ignoreWarnings('warn', ['ViewPropTypes', '[react-native-gesture-handler]']);
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'NativeBase: The contrast ratio of',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <Provider store={store}>
      <GalioProvider theme={theme}>
        <AppNavigator />
      </GalioProvider>
    </Provider>
  );
};

export default codePush(App);
