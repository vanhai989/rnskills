import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {AppStyles} from '../../common';

interface viewProps {
  style?: ViewStyle;
  appStyle?: string;
  children?: ReactNode;
  onLayout?: any;
  width?: any;
  height?: any;
  minHeight?: any;
}

const AppView = (props: viewProps) => {
  const {children, style = {}, appStyle = '', ...restProps} = props;

  const arrayStyles: any[] = [];
  const propKeys = `${appStyle}`.split(' ');
  propKeys.forEach(key => {
    if (AppStyles[key]) {
      arrayStyles.push(AppStyles[key]);
    }
  });

  return (
    <View {...restProps} style={[...arrayStyles, style]}>
      {children}
    </View>
  );
};

export default AppView;
