import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import appActions from '../../../store/app/appRedux';
import {useNavigation} from '@react-navigation/native';
import {Routers} from '../../routers';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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
