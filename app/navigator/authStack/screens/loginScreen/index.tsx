import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../../common/images';
import {useDispatch} from 'react-redux';
import authActions from '../../../../store/auth/authRedux';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSuccess = () => {
    navigation.navigate('AppStack');
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
        <View>
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
          <View style={styles.wrapperBtn}>
            <TouchableOpacity onPress={onSubmit} style={styles.btnSubmit}>
              <Text style={styles.btnText}>submit</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.otherAuthTitle}>
            If you don't have an account or forgot your password
          </Text>
          <View style={styles.otherAuth}>
            <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={styles.btnOtherAuth}>
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={styles.btnOtherAuth}>
              <Text style={styles.btnText}>Forgot password</Text>
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
    backgroundColor: 'orange',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  otherAuthTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
});
