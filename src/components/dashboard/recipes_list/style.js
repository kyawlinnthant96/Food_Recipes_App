import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  listContainer: {
    width: wp(45),
    height: hp(35),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.darkLime,
    shadowOpacity: hp(0.5),
    elevation: 3,
    marginHorizontal: wp(1.5),
    marginVertical: hp(0.8),
    overflow: 'hidden',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    padding: hp(1),
  },
  bottomText: {
    color: COLORS.white,
    ...FONTS.h5,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  catContaier: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.radius,
    paddingVertical: hp(0.5),
    // width: '40%',
    // height: hp(3),
    marginHorizontal: hp(1),
    marginVertical: hp(1),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },

  catText: {
    color: COLORS.white,
    ...FONTS.h5,
  },
  infoContainer: {
    padding: hp(1),
    width: '100%',
    height: '30%',
    justifyContent: 'space-between',
  },
  infoTitle: {
    color: COLORS.black,
    ...FONTS.body5,
  },
  ingCount: {
    color: COLORS.gray,
    ...FONTS.h5,
  },
});

export default styles;
