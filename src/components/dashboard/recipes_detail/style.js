import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: wp(100),
    height: hp(35),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: wp(100),
    alignItems: 'center',
  },
  mainTitle: {
    color: COLORS.black,
    textAlign: 'center',
    ...FONTS.h2,
    marginVertical: hp(4),
  },
  catTitle: {
    color: COLORS.lime,
    ...FONTS.body5,
    marginBottom: hp(1),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  time: {
    marginHorizontal: hp(1),
    color: COLORS.black,
    ...FONTS.body5,
  },
  ingBtnContent: {
    backgroundColor: COLORS.white,
    paddingVertical: hp(2),
    paddingHorizontal: hp(10),
    borderColor: COLORS.lime,
    borderWidth: hp(0.2),
    borderRadius: hp(3),
  },
  ingBtnText: {
    color: COLORS.lime,
    ...FONTS.body5,
  },
  descText: {
    marginVertical: hp(3),
    paddingHorizontal: hp(3),
    color: COLORS.black,
    ...FONTS.body5,
  },
  backButton: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    margin: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    borderRadius: hp(5),
  },
});

export default styles;
