// @ts-nocheck
import {GalioProvider} from 'galio-framework';
import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './app/navigator';
import store from './config/reduxConfig/store';
import {theme} from './app/common';
import {Text, TextInput} from 'react-native';

Text.defaultProps = {};
TextInput.defaultProps = {};

TextInput.defaultProps.allowFontScaling = false;
Text.defaultProps.allowFontScaling = false;
const App = () => {
  return (
    <Provider store={store}>
      <GalioProvider theme={theme}>
        <AppNavigator />
      </GalioProvider>
    </Provider>
  );
};

export default App;
