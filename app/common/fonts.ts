import {Platform} from 'react-native';
import colors from './color';

const lineScale = 1.34;

const createTextStyle = (fontSize: number, fontWeight: string = '400') => {
  let textStyle: any = {
    fontSize,
    color: colors.blackTextSecondary,
    lineHeight: Math.round(fontSize * lineScale),
    fontWeight,
  };

  if (Platform.OS === 'ios') {
    textStyle.fontFamily = 'Inter';
    textStyle.fontWeight = fontWeight;
  } else {
    textStyle.fontFamily = fontWeightAndroid[fontWeight];
    textStyle.fontWeight = fontWeight;
  }

  return textStyle;
};

const fontWeightAndroid: any = {
  '100': 'Inter-Thin',
  '200': 'Inter-Light',
  '300': 'Inter-Light',
  '400': 'Inter-Regular',
  '500': 'Inter-Medium',
  '600': 'Inter-SemiBold',
  '700': 'Inter-Bold',
  '800': 'Inter-ExtraBold',
  '900': 'Inter-Black',
};

const fonts: any = {
  w300: '300',
  w400: '400',
  w500: '500',
  w600: '600',
  w700: '700',
  createTextStyle,
};

export default fonts;
