import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  topContainer: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  loginImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  shade: {
    height: SIZES.gradientHeight,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  title: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  para: {
    marginVertical: SIZES.radius,
    width: '70%',
    color: COLORS.gray,
  },
  loginTitle: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h4,
  },
  regTitle: {
    textAlign: 'center',
    color: COLORS.darkLime,
    ...FONTS.h4,
  },
  loginBtn: {
    backgroundColor: COLORS.darkLime,
    paddingVertical: SIZES.vertical,
    borderRadius: SIZES.radius,
    marginTop: SIZES.baseGap,
  },
  regBtn: {
    marginTop: SIZES.gap,
    paddingVertical: SIZES.vertical,
    borderRadius: SIZES.radius,
    borderColor: COLORS.darkLime,
    borderWidth: 1,
  },
  langButton: {
    position: 'absolute',
    // backgroundColor: '#fff',
    borderWidth: hp(0.2),
    borderRadius: hp(5),
    borderColor: COLORS.white,
    top: 0,
    right: 0,
    width: wp(15),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    margin: hp(2),
  },
});

export default styles;
