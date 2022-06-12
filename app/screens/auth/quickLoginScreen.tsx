import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function QuickLoginScreen() {
  const loginWithRefreshToken = () => {};
  return (
    <View>
      <Text>QuickLoginScreen</Text>
      <TouchableOpacity onPress={loginWithRefreshToken}>
        <Text>Quick login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
