import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appActions} from '@store';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppView, BaseHeader} from '@components';
import {Styles, theme} from '@common';
import { ScrollView } from 'react-native-gesture-handler';

const CreatePostScreen = () => {
  const ditPatch = useDispatch();
  const navigation = useNavigation();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [content, setContent] = useState<string>('Beavers are among the largest living rodents in the world. They have thick fur, webbed feet and flattened, scale-covered tails. With powerful jaws and strong teeth, they fell trees in order to build homes and dams, often changing their environment in ways few other animals can. In fact, the idioms "busy as a beaver" and "eager beaver" are synonymous with being industrious and hardworking.');

  const createPostSuccess = (response: any) => {
    console.log('res', response);
  };

  const createPostFailed = () => {};

  const onCreatePost = () => {
    // console.log('title', title);
    // console.log('body', body);
    // const params = {
    //   title: title,
    //   body: body,
    // };
    // ditPatch(
    //   appActions.createPostRequest(params, createPostSuccess, createPostFailed),
    // );
  };
  return (
    <AppView style={styles.container}>
      <BaseHeader title="Post" backIcon={true} onPress={() => {}} />
     <ScrollView>
     <View style={styles.body}>
        {/* <View style={styles.wrapInput}>
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
        </View> */}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            textAlignVertical= "top"
            value={content}
            onChangeText={setContent}
          />
        </View>
        <Image
          source={{
            uri: 'https://media.sciencephoto.com/z9/18/01/28/z9180128-800px-wm.jpg',
          }}
          style={styles.imageContent}
        />

        <TouchableOpacity onPress={onCreatePost} style={styles.wrap_button}>
         <View style={styles.btnPost}>
          <Text style={styles.post_text}>create post</Text>
         </View>
        </TouchableOpacity>
      </View>
     </ScrollView>
    </AppView>
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
  imageContent: {
    width: theme.SIZES.WIDTH_SCREEN - 30,
    height: 300,
    borderRadius: 5,
  },
  textAreaContainer: {
    borderColor: 'gray',
    // borderWidth: 0.5,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
  wrap_button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  post_text: {
   color: 'white'
  },
  btnPost: {
    width: 150,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5
  }
});
