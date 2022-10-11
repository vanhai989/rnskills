import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images, Styles } from '@common';
import { AppView, AppText, AppButton } from '@components';
import { Image, ImageBackground, Platform } from 'react-native';

const STATUS_BAR_HEIGHT = Styles.Common.specifications.statusBarHeight;
const HEADER_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? Styles.Common.specifications.headerHeight +
      Styles.Common.specifications.statusBarHeight
    : Styles.Common.specifications.headerHeight;


interface Props {
  title?: string;
  backIcon?: boolean;
  onPress?: () => void;
}

const BaseHeader = (props: Props) => {
  const { title = '', backIcon = false, onPress } = props;
  const navigation = useNavigation();
  // const isDisableGoBack = useSelector(state => state?.app?.isDisableGoBack);
  const onPressGoBack = () => {
    // if (isDisableGoBack) {
    //   return;
    // }
    // if (onPress) {
    //   onPress();
    // } else {
    //   navigation.goBack();
    // }
    navigation.goBack();
  };
  return (
    <AppView
      appStyle="mb0"
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#EFEFEF',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
      <ImageBackground
        source={Images.bgHeader}
        style={{
          height: HEADER_BAR_HEIGHT,
        }}
        resizeMode="stretch">
        <AppView
          appStyle="row aliC jusB ph24 flex1 pb10"
          style={{
            marginTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
          }}>
          {backIcon && (
            <AppButton
              width={30}
              onPress={onPressGoBack}
              hitSlop={{ top: 10, right: 15, bottom: 10, left: 15 }}>
              <Image source={Images.backIcon} style={{width: 10, height: 10}} />
            </AppButton>
          )}
          <AppText bound appStyle="size20 w700 white jusC aliC flex1">
            {title}
          </AppText>
          {!!backIcon && <AppView width={30} />}
        </AppView>
      </ImageBackground>
    </AppView>
  );
};

export default BaseHeader;
