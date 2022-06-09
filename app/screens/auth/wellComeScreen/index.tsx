import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';
import Images from '../../../../common/images';

const initCarouselItems = [
  {
    title: 'well come 1',
    text: 'Text 1',
  },
  {
    title: 'well come 2',
    text: 'Text 2',
  },
  {
    title: 'well come 3',
    text: 'Text 3',
  },
  {
    title: 'well come 4',
    text: 'Text 4',
  },
];

const WellComeScreen = () => {
  const carousel = React.useRef(null);

  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselItems, setCarouselItems] = React.useState(initCarouselItems);

  const onPress = (index: number) => {
    if (index === carouselItems.length - 1) {
      console.log('index', index);
      navigation.navigate('login');
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(index)}
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={Images.backgroundCarousel} style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={carousel}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
    </ImageBackground>
  );
};

export default WellComeScreen;
