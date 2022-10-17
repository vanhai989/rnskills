import {AppView} from '@components';
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Images} from '@common'


const NotificationItem = ({avatar, title, color, timing}: {avatar: string, title: string, color: string, timing: string}) => {
    return (
      <AppView appStyle='viewShadow' style={[styles.container, {borderColor: color ?? 'purple'}]} >
        <View style={styles.wrap_avatar}>
          <Image
            source={avatar ?? Images.avatar2}
            style={styles.image}
          />
          <Text style={styles.title}>{title ?? 'Have biz email ID?'}</Text>
        </View>
        <Text style={styles.timing}>{timing ?? '10 hours ago'}</Text>
      </AppView>
    );
}

export default NotificationItem

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderLeftWidth: 4,
    borderRightWidth: 4,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  wrap_avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 8,
  },
  timing: {
    textAlign: 'right',
    color: 'gray',
  },
});
