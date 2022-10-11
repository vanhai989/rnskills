import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import {Images} from '@common';
import {useDispatch} from 'react-redux';
import {appActions, authActions} from '@store';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const registerSuccess = () => {
    dispatch(appActions.hideIndicator())
    navigation.goBack();
  };
  const registerFailed = () => {
    dispatch(appActions.hideIndicator())
  };

  const onSubmit = () => {
    if (!!name && !!email && password && password === passwordConfirm) {
      const params = {
        email,
        password,
        name,
      };
      dispatch(appActions.showIndicator())
      dispatch(authActions.register(params, registerSuccess, registerFailed));
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Images.backgroundLogin} style={styles.container}>
        <View>
          <Text style={styles.loginTitle}>Register</Text>
          <Text style={styles.titleTextInput}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.textInput}
          />
          <Text style={styles.titleTextInput}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
          <Text style={styles.titleTextInput}>Password</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          />
          <Text style={styles.titleTextInput}>Password confirm</Text>
          <TextInput
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            style={styles.textInput}
          />
          <View style={styles.wrapperBtn}>
            <TouchableOpacity onPress={onSubmit} style={styles.btnSubmit}>
              <Text style={styles.btnText}>submit</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.otherAuthTitle}>*==============*</Text>
          <View style={styles.otherAuth}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.btnOtherAuth}>
              <Text style={styles.btnText}>Login</Text>
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

export default RegisterScreen;

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
