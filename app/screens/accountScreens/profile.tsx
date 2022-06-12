import {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>ProfileScreen</Text>

        <TouchableOpacity onPress={onLogout} style={styles.btnLogout}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogout: {
    marginVertical: 10,
  },
  textLogout: {
    color: 'blue',
  },
});
