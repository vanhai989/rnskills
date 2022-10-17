import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {appActions} from '@store';
import {useNavigation} from '@react-navigation/native';
import {Images} from '@common';
import {AppButton, BaseHeader} from '@components';
import Theme from '../../common/theme';
import NewItem from './News/NewItem';
import {FloatingAction} from 'react-native-floating-action';
import { Routers } from '@routers';

const actions = [
  {
    text: 'Accessibility',
    icon: Images.plusIcon,
    name: 'Posting',
    position: 2,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getUserSuccess = response => {
    setUsers(response);
  };
  const getUserFailed = error => {};

  const getPostSuccess = response => {
    setPosts(response);
  };
  const getPostFailed = error => {};

  useEffect(() => {
    // dispatch(appActions.getUsersRequest(getUserSuccess, getUserFailed));
    dispatch(appActions.getPostsRequest(getPostSuccess, getPostFailed));
    // dispatch(
    //   appActions.getPhotosRequest(
    //     res => {
    //       setPhotos(res);
    //     },
    //     () => setPhotos([]),
    //   ),
    // );
  }, []);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    );
  };

  const _renderItemPosts = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  const convertToBase64 = async (
    path = '/Users/haidev/workspace/express/express_api/uploads/1846d42c-72f1-4456-abdc-01feaaf12ac1.png',
  ) => {
    let result = '';
    await ImgToBase64.getBase64String(`file://${path}`)
      .then(base64 => {
        result = base64;
      })
      .catch(err => console.log(err));
    return result;
  };

  const _renderItemPhotos = ({item, index}: any) => {
    if (photos.length > 0) {
      const {name, img} = item;
      return (
        <View key={index}>
          <Text>{name}</Text>
          <Image
            source={{
              uri: `data:application/png;base64,${img}`,
            }}
            style={{width: 200, height: 200}}
          />
        </View>
      );
    } else {
      return <View />;
    }
  };
  return (
    <View style={styles.container}>
      <BaseHeader title="Sharing" backIcon={false} onPress={() => {}} />
      <ScrollView>
        <NewItem />
        <View style={{height: 5, backgroundColor: '#EBEBEB'}} />
        <NewItem />
        <View style={{height: 5, backgroundColor: '#EBEBEB'}} />
      </ScrollView>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name == 'Posting') {
            navigation.navigate(Routers.CreatePost)
          }
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
  },
  item: {
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  wrap_avatar: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  content_image: {
    width: (Theme.SIZES.WIDTH_SCREEN - 35) / 2,
    height: 150,
    marginBottom: 5,
  },
  content_image_bottom: {
    width: (Theme.SIZES.WIDTH_SCREEN - 40) / 3,
    height: 100,
  },
  wrap_title: {
    marginLeft: 5,
  },
  username: {
    color: '#009FE3',
  },
  subject: {
    color: 'gray',
  },
  wrap_subject: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  subject_content: {
    color: '#009FE3',
    overflow: 'hidden',
    flex: 1,
  },
  body_content: {
    lineHeight: 18,
  },
  wrap_images: {
    marginTop: 10,
  },
});
