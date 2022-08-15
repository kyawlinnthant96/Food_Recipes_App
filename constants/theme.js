import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  darkBlue: '#34455e',
  darkGreen: '#229879',
  darkLime: '#1A8871',
  lightLime: '#BBD6C5',
  lime: '#2AD699',
  lightGreen: '#E7F9EF',
  lightGreen1: '#8EbCA0',

  white: '#fff',
  white2: '#F9F9F9',
  black: '#020202',
  blue: '#4096FE',
  gray: '#777777',
  gray2: '#F8F8F8',
  lightGray: '#F5F6FB',
  lightGray2: '#757575',
  yellow: '#feb912',
  yellow2: '#fdc713',
  yellow3: '#feb70d',

  transparentBlack1: 'rgba(2, 2, 2, 0.1)',
  transparentBlack3: 'rgba(2, 2, 2, 0.3)',
  transparentBlack5: 'rgba(2, 2, 2, 0.5)',
  transparentBlack7: 'rgba(2, 2, 2, 0.7)',
  transparentBlack9: 'rgba(2, 2, 2, 0.9)',

  transparentGray: 'rgba(77,77,77, 0.8)',
  transparentDarkGray: 'rgba(20,20,20, 0.9)',

  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  base: wp(2),
  font: wp(5),
  radius: wp(3),
  padding: wp(6),
  grandientHeight: hp(20),
  vertical: hp(2),
  baseGap: hp(3),
  gap: hp(1.5),

  // font sizes
  largeTitle: wp(10),
  h1: wp(8),
  h2: wp(7),
  h3: wp(6),
  h4: wp(5),
  h5: wp(3.5),
  body1: wp(8),
  body2: wp(7),
  body3: wp(5.5),
  body4: wp(5),
  body5: wp(4),
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 27},
  h5: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h5, lineHeight: 18},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 24},
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22.5,
  },
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
