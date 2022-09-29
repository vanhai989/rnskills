import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from '@store';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {AppView, BaseHeader} from '@components'
import {theme, Images} from '@common';
export default function ProfileScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logoutSuccess = () => {
    console.log('logout success');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'authNavigator',
            params: {screen: 'login'},
          },
        ],
      }),
    );
  };

  const logoutFailed = error => {
    console.log('error', error);
  };

  const onLogout = () => {
    // dispatch(authActions.logoutRequest(logoutSuccess, logoutFailed));
    dispatch(authActions.logoutSuccessRequest());
  };
  return (
    <AppView style={styles.container}>
      {/* <BaseHeader title='Account' backIcon={undefined} onPress={() => {}} /> */}
      <AppView style={styles.container}>
        {/* wrapper avatar */}
        <AppView>
          <Image source={Images.profileAvatar} style={styles.backgroundIm} />
          <View style={styles.group_avatar}>
            <Image source={Images.profileAvatar} style={styles.avatar} />
            <Text style={styles.username}>Jody Wisternoff</Text>
            <Text style={styles.location}>NEW YORK</Text>
          </View>
        </AppView>

      <View style={styles.body}>
        <UserInfoItem title='Name' value='Jody Wisternoff' />
        <UserInfoItem title='Email' value='JodyWisternoff@gmail.com' />
        <UserInfoItem title='Password' value='**********' />
        <UserInfoItem title='User ID' value='22200' />
       <TouchableOpacity onPress={onLogout} style={styles.btnLogout}>
         <Text style={styles.textLogout}>Logout</Text>
       </TouchableOpacity>
     </View>
      </AppView>
    </AppView>
  );
}

const UserInfoItem = ({title, value}: {title: string, value: string}) => {
  return (
    <View style={styles.wrap_userInfo}>
      <Text style={styles.titleInfo}>{title}</Text>
      <Text style={styles.valueInfo}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 80
  },
  btnLogout: {
    marginVertical: 10,
  },
  textLogout: {
    color: 'blue',
    textAlign: 'center'
  },
  backgroundIm: {
    width: theme.SIZES.WIDTH_SCREEN,
    height: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  group_avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: (theme.SIZES.WIDTH_SCREEN - 100) / 2,
    bottom: -70,
  },
  location: {
    fontSize: 10,
    color: 'gray'
  },
  username: {
    fontWeight: '700',
    marginTop: 5
  },
  titleInfo: {
    color: 'purple'
  },
  valueInfo: {
    fontWeight: '700',
    marginTop: 5
  },
  wrap_userInfo: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginVertical: 10
  }
});
