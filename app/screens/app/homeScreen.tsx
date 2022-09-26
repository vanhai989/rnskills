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
import {BaseHeader} from '@components';
import Theme from '../../common/theme';

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
      <BaseHeader title='Sharing' backIcon={undefined} onPress={() => {}} />
      <View style={styles.body}>
        <View>
          {/* <FlatList data={posts} renderItem={_renderItemPosts} /> */}
          <View style={styles.item}>
            <View style={styles.wrap_avatar}>
              <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'}}
              style={styles.avatar}
              />
             <View>
              <Text>Hà Ngọc Cường</Text>
              <Text>10:40 PM - 04/06/2022</Text>
             </View>
            </View>
            <Text>subject: The beaver is North America's largest rodent and is built for life in the water.</Text>
            <Text>Adults can be up to four feet long and weigh over 60 pounds. 
              The beaver has webbed hind feet and a large, flat, nearly hairless tail. 
              It uses its tail to help maintain its balance when it is gnawing on trees. 
              It will also slap its tail against the water to signal danger or to warn away predators. 
              The beaver has short front legs with heavy claws. Their rear legs are longer, 
              and they use their rear webbed feet help propel themselves through the water.
              When the beaver is under water, its nose and ears close up and a special membrane covers its eyes.</Text>
              <Image source={{uri: 'https://nhpbs.org/wild/images/beavernps2.jpg'}} style={styles.content_image} />
        </View>
        </View>
      </View>
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
    borderRadius: 20
  },
  wrap_avatar: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  content_image: {
    width: Theme.SIZES.WIDTH_SCREEN - 30,
    height: 300
  }
});
