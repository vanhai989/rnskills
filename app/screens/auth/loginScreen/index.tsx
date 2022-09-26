import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '@common';
import {useDispatch} from 'react-redux';
import {authActions} from '@store';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '../../../navigator/routers';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSuccess = () => {
    navigation.navigate(Routers.RootStack);
  };
  const loginFailed = () => {};

  const onSubmit = () => {
    const params = {
      email,
      password,
    };
    dispatch(authActions.loginRequest(params, loginSuccess, loginFailed));
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Images.backgroundLogin} style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 100}}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.titleTextInput}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
          <Text style={styles.titleTextInput}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          />
           <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={styles.btnOtherAuth}>
              <Text style={[styles.btnText, {textAlign: 'right', textDecorationLine: 'underline', marginTop: 5}]}>
                Register</Text>
            </TouchableOpacity>
          <View style={styles.wrapperBtn}>
            <TouchableOpacity onPress={onSubmit} style={styles.btnSubmit}>
              <Text style={styles.btnText}>submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: 'yellow'
  },
  wrapperBtn: {
    marginTop: 50,
    paddingVertical: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  btnSubmit: {
    width: '100%',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
  loginTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextInput: {
    color: 'white',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 5,
  },
  otherAuth: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnOtherAuth: {
    // flex: 1,
  },
  otherAuthTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
});
