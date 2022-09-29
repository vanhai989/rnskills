import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import React from 'react';

import Theme from '../../../common/theme';
import {PADDING_HORIZONTAL} from '../../../utils'
export default function NewItem() {
  return (
    <View style={[styles.item, styles.viewShadow]}>
            <View style={styles.wrap_avatar}>
              <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'}}
              style={styles.avatar}
              />
             <View style={styles.wrap_title}>
              <Text style={styles.username}>Dana.skil</Text>
              <Text>10:40 PM - 04/06/2022</Text>
             </View>
            </View>
            <View style={styles.wrap_subject}>
            <Text style={styles.subject}>subject:</Text>
            <Text style={styles.subject_content} numberOfLines={1}> The beaver is North America's largest rodent and is built for life in the water.</Text>
            </View>
            <Text style={styles.body_content} numberOfLines={8}>Adults can be up to four feet long and weigh over 60 pounds. 
              The beaver has webbed hind feet and a large, flat, nearly hairless tail. 
              It uses its tail to help maintain its balance when it is gnawing on trees. 
              It will also slap its tail against the water to signal danger or to warn away predators. 
              The beaver has short front legs with heavy claws. Their rear legs are longer, 
              and they use their rear webbed feet help propel themselves through the water.
              When the beaver is under water, its nose and ears close up and a special membrane covers its eyes.</Text>
              <View style={styles.wrap_images}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={{uri: 'https://nhpbs.org/wild/images/beavernps2.jpg'}} style={[styles.content_image, {marginRight: 2.5}]} />
                  <Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/kcRzdovizut8baffisLP7a.jpg'}} style={[styles.content_image, {marginLeft: 2.5}]} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image source={{uri: 'https://i.pinimg.com/736x/c9/50/c8/c950c814e02800e9e455a5164fbad3ea--cutaway-beavers.jpg'}} style={[styles.content_image_bottom, {marginRight: 2.5}]} />
                  <Image source={{uri: 'https://www.worldlifeexpectancy.com/images/a/w/b/castor-canadensis/castor-canadensis.jpg'}} style={[styles.content_image_bottom, {marginRight: 2.5, marginLeft: 2.5}]} />
                  <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/10/17/14/18/beaver-2860796__480.jpg'}} style={[styles.content_image_bottom, {marginLeft: 2.5}]} />
                </View>
              </View>
        </View>
  )
}


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
      paddingHorizontal: PADDING_HORIZONTAL,

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
      width: (Theme.SIZES.WIDTH_SCREEN - 35) / 2,
      height: 150,
      marginBottom: 5
    },
    content_image_bottom: {
      width: (Theme.SIZES.WIDTH_SCREEN - 40) / 3,
      height: 100,
    },
    wrap_title: {
      marginLeft: 5
    },
    username: {
      color: '#009FE3'
    },
    subject: {
      color: 'gray'
    },
    wrap_subject: {
      flexDirection: 'row',
      marginVertical: 10
    },
    subject_content: {
      color: '#009FE3',
      overflow: 'hidden',
      flex: 1,
    },
    body_content: {
      lineHeight: 18
    },
    wrap_images: {
      marginTop: 10
    },
    viewShadow: {
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    },
  });
  