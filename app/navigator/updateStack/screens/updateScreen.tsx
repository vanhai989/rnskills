import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BaseHeader} from '../../../components'
import NotificationItem from './NotificationItem'
import {Images} from '@common'

export default function UpdateScreen() {
  return (
    <View style={styles.container}>
      <BaseHeader title='Notification' backIcon={false} onPress={() => {}} />
     <View style={styles.body}>
     <NotificationItem avatar={Images.avatar2} title='Have biz email ID?' color='purple' timing='10 hours ago' />
     <NotificationItem avatar={Images.avatar3} title='Invite your friend still sharvan' color='green' timing='12 hours ago' />
     <NotificationItem avatar={Images.avatar4} title='Have biz email ID?' color='' timing='13 hours ago' />
     <NotificationItem avatar={Images.avatar2} title='Have biz email ID?' color='' timing='14 hours ago' />
     <NotificationItem avatar={Images.avatar3} title='Have biz email ID?' color='' timing='15 hours ago' />
     </View>
      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 15
  }
});
