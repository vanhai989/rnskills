import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import appActions from '../../../store/app/appRedux';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '../../routers';
import {useDispatch} from 'react-redux';

const CreatePostScreen = () => {
  const ditPatch = useDispatch();
  const navigation = useNavigation();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const createPostSuccess = (response: any) => {
    console.log('res', response);
  };

  const createPostFailed = () => {};

  const onCreatePost = () => {
      console.log('title', title);
      console.log('body', body);
      
    const params = {
      title: title,
      body: body,
    };
    ditPatch(
      appActions.createPostRequest(params, createPostSuccess, createPostFailed),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.wrapInput}>
          <Text>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapInput}>
          <Text>Body</Text>
          <TextInput
            value={body}
            onChangeText={setBody}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity onPress={onCreatePost}>
          <Text>create post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ADD8E6',
  },
  wrapInput: {
    marginVertical: 5,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
