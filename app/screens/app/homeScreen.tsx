import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {appActions} from '@store';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '@routers';

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
    dispatch(appActions.getUsersRequest(getUserSuccess, getUserFailed));
    dispatch(appActions.getPostsRequest(getPostSuccess, getPostFailed));
    dispatch(
      appActions.getPhotosRequest(
        res => {
          setPhotos(res);
        },
        () => setPhotos([]),
      ),
    );
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
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>homeScreen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routers.CreatePost)}>
          <Text>create post</Text>
        </TouchableOpacity>

        <View>
          <Text>list users</Text>
          <FlatList data={users} renderItem={_renderItem} />
        </View>

        <View>
          <Text>list posts</Text>
          <FlatList data={posts} renderItem={_renderItemPosts} />
        </View>
        <View>
          <Text>list photos</Text>
          <FlatList data={photos} renderItem={_renderItemPhotos} />
        </View>
      </View>
    </SafeAreaView>
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
});
