import {Platform, StyleSheet} from 'react-native';
import colors from './color';
import metrics from './metrics';

export const createStyle = (size: number) => ({
  [`pa${size}`]: {padding: metrics[`size${size}`]},
  [`pt${size}`]: {paddingTop: metrics[`size${size}`]},
  [`pb${size}`]: {paddingBottom: metrics[`size${size}`]},
  [`pl${size}`]: {paddingLeft: metrics[`size${size}`]},
  [`pr${size}`]: {paddingRight: metrics[`size${size}`]},
  [`ph${size}`]: {paddingHorizontal: metrics[`size${size}`]},
  [`pv${size}`]: {paddingVertical: metrics[`size${size}`]},

  [`ma${size}`]: {margin: metrics[`size${size}`]},
  [`mt${size}`]: {marginTop: metrics[`size${size}`]},
  [`mb${size}`]: {marginBottom: metrics[`size${size}`]},
  [`ml${size}`]: {marginLeft: metrics[`size${size}`]},
  [`mr${size}`]: {marginRight: metrics[`size${size}`]},
  [`mh${size}`]: {marginHorizontal: metrics[`size${size}`]},
  [`mv${size}`]: {marginVertical: metrics[`size${size}`]},
});

const widthItem4 = Math.round((metrics.screenWidth - 20 * 2 - 10 * 3) / 4);
const widthItem2 = Math.round((metrics.screenWidth - 16 * 3) / 2);

let styles: any = {
  row: {flexDirection: 'row'},
  jusB: {justifyContent: 'space-between'},
  jusC: {justifyContent: 'center'},
  jusS: {justifyContent: 'flex-start'},
  jusE: {justifyContent: 'flex-end'},
  aliC: {alignItems: 'center'},
  aliS: {alignItems: 'flex-start'},
  aliE: {alignItems: 'flex-end'},
  bgRed: {backgroundColor: 'red'},
  bgGray: {backgroundColor: colors.gray},
  bgWhite: {backgroundColor: 'white'},
  bgBlack05: {backgroundColor: colors.blackTextSecondary},
  bgGray1: {backgroundColor: '#F8F9FA'},
  flex1: {flex: 1},
  br15: {borderRadius: metrics.size15},
  br4: {borderRadius: metrics.size4},
  br12: {borderRadius: metrics.size12},
  brBottom15: {
    borderBottomRightRadius: metrics.size15,
    borderBottomLeftRadius: metrics.size15,
  },
  brTop15: {
    borderTopRightRadius: metrics.size15,
    borderTopLeftRadius: metrics.size15,
  },
  br7: {borderRadius: metrics.size7},
  br10: {borderRadius: metrics.size10},
  viewChooseDay: {
    width: metrics.size40,
    height: metrics.size40,
    borderRadius: metrics.size20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  absoluteCamera: {
    position: 'absolute',
    top: -metrics.size4,
    right: -metrics.size24,
  },
  absoluteBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  absoluteTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  item4: {
    width: widthItem4,
    height: widthItem4,
    borderRadius: metrics.size10,
  },
  item41: {
    width: widthItem4 - metrics.size2,
    height: widthItem4 - metrics.size2,
    borderRadius: metrics.size10,
  },
  viewBorderBottom: {
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.primary,
  },
  viewBorderTop: {
    borderTopWidth: metrics.size1,
    borderTopColor: colors.gray6,
  },
  viewBorderBottomGray: {
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.gray6,
  },
  viewBorderGray: {
    borderWidth: metrics.size1,
    borderColor: '#EDF0F1',
    borderRadius: metrics.size8,
  },
  heigh35: {
    height: metrics.size35,
  },
  br5: {
    borderRadius: metrics.size5,
  },
  br8: {
    borderRadius: metrics.size8,
  },
  br20: {
    borderRadius: metrics.size20,
  },
  br2: {
    borderRadius: metrics.size2,
  },
  row2: {
    width: widthItem2,
  },
  hiddenOver: {
    overflow: 'hidden',
  },
  height0: {
    height: 0,
  },
  touchAndDrag: {
    height: metrics.size3,
    borderRadius: metrics.size2,
    width: metrics.size60,
    backgroundColor: colors.gray2,
    alignSelf: 'center',
  },
  hiddenBackground: {
    position: 'absolute',
    bottom: 0,
    top: '50%',
    left: 0,
    right: 0,
    backgroundColor: colors.white,
  },
  swap: {
    flexWrap: 'wrap',
  },
  heightHeader: {
    height: metrics.size85 + metrics.statusBarHeight,
  },
  ptStatusBar: {
    paddingTop: metrics.statusBarHeight,
  },
  ptTopSpecs: {
    height: Platform.OS === 'ios' ? metrics.statusBarHeight : metrics.size20,
  },
  mtStatusBar: {
    marginTop: metrics.statusBarHeight,
  },
  heightButton: {
    height: metrics.size48,
  },
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  flex1dot5: {
    flex: 1.5,
  },
  bgPrimaryOpacity: {
    backgroundColor: 'rgba(0,171,157,0.2)',
  },
  viewShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.41,
    elevation: 3,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  dotActive: {
    height: metrics.size10,
    width: metrics.size10,
    borderRadius: metrics.size5,
    backgroundColor: colors.primary,
    marginHorizontal: metrics.size3,
  },
  dotInActive: {
    height: metrics.size10,
    width: metrics.size10,
    borderRadius: metrics.size5,
    backgroundColor: colors.primaryOpacity,
    marginHorizontal: metrics.size3,
  },
  buttonLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBottom: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  bgGray2: {
    backgroundColor: '#F0F0F0',
  },
};

for (let i = 1; i <= 100; i++) {
  styles = {...styles, ...createStyle(i)};
}

const AppStyles = StyleSheet.create({
  ...styles,
});

export default AppStyles;
