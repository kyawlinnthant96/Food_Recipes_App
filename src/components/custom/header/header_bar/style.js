import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    height: hp(10),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 3,
  },
  welcomText: {
    flex: 1,
  },
  wel1: {
    color: COLORS.darkGreen,
    ...FONTS.h2,
  },
  wel2: {
    marginTop: hp(1),
    color: COLORS.gray,
    ...FONTS.body4,
  },
  image: {
    width: wp(14),
    height: hp(7),
    borderRadius: hp(5),
  },
});

export default styles;
