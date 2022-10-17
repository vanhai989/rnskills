import { Color } from '@common';
import React, { memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const AppIndicator = function () {
  const isShowingIndicator = useSelector(
    state => state?.app?.isShowingIndicator,
  );
console.log("isShowingIndicator: ", isShowingIndicator)
  if (!isShowingIndicator) {
    return <View />;
  }

  return (
    <View style={styles.viewAbsolute}>
      <ActivityIndicator size="large" color={Color.attributes.black} />
    </View>
  );
};

export default memo(AppIndicator);

const styles = StyleSheet.create({
  viewAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
