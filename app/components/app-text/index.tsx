import React, {ReactNode} from 'react';
import {Text, ViewStyle} from 'react-native';
import {Fonts, Color, Metrics, TextStyle} from '../../common';
import AppView from '../app-view';

interface textProps {
  style?: ViewStyle;
  children?: ReactNode;
  size?: number;
  weight?: string;
  color?: string;
  bound?: boolean;
  lineHeight?: number;
  appStyle?: string;
  height?: number;
}

const AppText = (props: textProps) => {
  const {
    children,
    style = {},
    size,
    weight,
    color,
    bound,
    lineHeight,
    appStyle = '',
  } = props;

  const propKeys = `${appStyle}`.split(' ');

  let propSize = Metrics.size14;
  let propWeight = Fonts.w400;
  let propColor = Color.blackTextSecondary;

  const arrayStyles: any = [];

  propKeys.forEach(key => {
    if (Metrics[key]) {
      propSize = Metrics[key];
    }
    if (Fonts[key]) {
      propWeight = Fonts[key];
    }
    if (Color[key]) {
      propColor = Color[key];
    }
    if (TextStyle[key]) {
      arrayStyles.push(TextStyle[key]);
    }
  });

  const styleText = Fonts.createTextStyle(
    size || propSize,
    weight || propWeight,
  );
  if (bound) {
    return (
      <AppView {...props}>
        <Text
          {...props}
          style={[
            styleText,
            lineHeight && {lineHeight},
            {color: color || propColor},
            ...arrayStyles,
            style,
          ]}>
          {children}
        </Text>
      </AppView>
    );
  }
  return (
    <Text
      {...props}
      style={[
        styleText,
        lineHeight && {lineHeight},
        {color: color || propColor},
        ...arrayStyles,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
