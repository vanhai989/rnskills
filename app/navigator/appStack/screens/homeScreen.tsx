import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import appActions from '../../../store/app/appRedux';

const HomeScreen = () => {
  const ditPatch = useDispatch();

  const createPostSuccess = () => {};

  const createPostFailed = () => {};
  const onCreatePost = () => {
    const params = {};
    ditPatch(
      appActions.createPostRequest(params, createPostSuccess, createPostFailed),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>homeScreen</Text>
        <TouchableOpacity onPress={onCreatePost}>
          <Text>create post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
