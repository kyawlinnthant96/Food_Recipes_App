import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(10),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.darkLime,
    shadowOpacity: hp(0.8),
    elevation: 1,
    marginBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    borderBottomEndRadius: hp(2),
    borderBottomStartRadius: hp(2),
  },
  imageContainer: {
    width: wp(15),
    height: hp(7.5),
    marginHorizontal: hp(2),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: hp(10),
    borderWidth: hp(0.3),
    borderColor: COLORS.black,
  },
  infoContainer: {
    width: wp(60),
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    paddingVertical: hp(2),
  },
  name: {
    color: COLORS.black,
    ...FONTS.body4,
  },
  editBtnContent: {},
  editText: {
    textDecorationLine: 'underline',
    color: COLORS.blue,
  },
});

export default styles;
