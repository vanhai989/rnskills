import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
}
const Header = ({title}: Props) => {
  const navigation = useNavigation();
  console.log('title', title);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{...StyleSheet.absoluteFillObject, backgroundColor: 'white'}}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.wrapperGoBack}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
      <View />
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  leftContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 0,
    maxWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
  wrapperGoBack: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
