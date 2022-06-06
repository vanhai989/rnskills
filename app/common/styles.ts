import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const dimensions = {
  height: screenHeight,
  width: screenWidth,
};
const Common = {
  ColumnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColumnCenterTop: {
    alignItems: 'center',
  },
  ColumnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ColumnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ColumnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  specifications: {
    statusBarHeight: getStatusBarHeight(),
    iOSstatusBarHeight: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    headerHeight: 76,
    bottomNavbarHeight: 56,
    headerBarHeight: Platform.OS === 'ios' ? 85 + getStatusBarHeight() : 85,
    bottomSpaceHeight: Platform.OS === 'ios' ? getBottomSpace() : 0,
    headerNotificationHeightSelected: 56,
  },
  viewAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
};
const FontSize = {
  tiny: 12,
  small: 14,
  normal: 15,
  medium: 16,
  big: 18,
  large: 20,
};
const IconSize = {
  TextInput: 25,
  ToolBar: 18,
  Inline: 20,
  SmallRating: 14,
};
const FontFamily = {
  NunitoBold: 'Nunito-Bold',
  NunitoLight: 'Nunito-Light',
  NunitoSemiBold: 'Nunito-SemiBold',
  RobotoRegular: 'Roboto-Regular',
};

const styles = {
  dimensions,
  Common,
  FontSize,
  IconSize,
  FontFamily,
};

export default styles;
