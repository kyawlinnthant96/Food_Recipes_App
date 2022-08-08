import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkLime,
  },
  safeContent: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp(5),
    paddingBottom: hp(3),
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  text_header: {
    color: COLORS.white,
    ...FONTS.largeTitle,
  },
  text_footer: {
    marginTop: hp(2),
    color: COLORS.darkBlue,
    ...FONTS.h4,
  },
  action: {
    flexDirection: 'row',
    marginTop: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: hp(1),
    color: '#05375a',
    ...FONTS.body4,
    marginTop: -hp(0.3),
  },
  gradientContainer: {
    marginTop: SIZES.gap,
    paddingVertical: SIZES.vertical,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  titleStyle: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h4,
  },
  btnStyle: {
    width: '100%',
  },
  titleStyle2: {
    textAlign: 'center',
    color: COLORS.darkLime,
    ...FONTS.h4,
  },
  btnStyle2: {
    marginTop: hp(1),
    paddingVertical: SIZES.vertical,
    borderRadius: SIZES.radius,
    borderColor: COLORS.darkLime,
    borderWidth: 1,
  },
});

export default styles;
