import React, {ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {AppStyles} from '../../common';

interface viewProps {
  style?: ViewStyle;
  children?: ReactNode;
  activeOpacity?: number;
  appStyle?: string;
  onPressIn?: () => void;
  onPress?: () => void;
  disabled?: Boolean;
}

const AppButton = (props: viewProps) => {
  const {
    children,
    style = {},
    onPressIn = () => {},
    onPress = () => {},
    appStyle = '',
    activeOpacity,
    disabled,
    ...restProps
  } = props;
  const arrayStyles: any[] = [];
  const propKeys = `${appStyle}`.split(' ');

  propKeys.forEach(key => {
    if (AppStyles[key]) {
      arrayStyles.push(AppStyles[key]);
    }
  });
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.7}
      onPress={onPress}
      disabled={disabled}
      onPressIn={onPressIn}
      {...restProps}
      style={[...arrayStyles, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;
