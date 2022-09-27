import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BaseHeader} from '../../../components'

export default function UpdateScreen() {
  return (
    <View style={styles.container}>
      <BaseHeader title='Notification' backIcon={undefined} onPress={() => {}} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
