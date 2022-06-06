import { Dimensions } from 'react-native';
import { theme as materialTheme } from 'galio-framework';
import colors from './color';
const { height, width } = Dimensions.get('screen');

const Theme = {
  ...materialTheme,
  COLORS: {
    ...materialTheme.COLORS,
    DEFAULT: '#DCDCDC',
    PRIMARY: '#00AB9D',
    LABEL: '#FE2472',
    INFO: '#00BCD4',
    ERROR: '#F44336',
    SUCCESS: '#4CAF50',
    WARNING: '#FF9800',
    MUTED: '#979797',
    INPUT: '#DCDCDC',
    ACTIVE: '#9C26B0',
    BUTTON_COLOR: '#9C26B0',
    PLACEHOLDER: '#9FA5AA',
    SWITCH_ON: '#9C26B0',
    SWITCH_OFF: '#D4D9DD',
    GRADIENT_START: '#6B24AA',
    GRADIENT_END: '#AC2688',
    PRICE_COLOR: '#EAD5FB',
    BORDER_COLOR: '#E7E7E7',
    BLOCK: '#E7E7E7',
    ICON: '#4A4A4A',
    ...colors,
  },
  SIZES: {
    ...materialTheme.SIZES,
    BLOCK_SHADOW_RADIUS: 2,
    BLOCK_DEFAULT_HEIGHT: 10,
    BUTTON_BORDER_RADIUS: 8,
    WIDTH_SCREEN: width,
    HEIGHT_SCREEN: height,
    FONT_SIZE_TINY: 12,
    FONT_SIZE_SMALL: 14,
    FONT_SIZE_NOMAL: 15,
    FONT_SIZE_MEDIUM: 16,
    FONT_SIZE_BIG: 18,
    FONT_SIZE_LARGE: 20,
    BORDER_LINE_HEIGHT: 1,
    BUTTON_HEIGHT: 48,
  },
};
export default Theme;
