import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(1),
    marginTop: hp(1),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: wp(30),
    height: hp(15),
    borderRadius: SIZES.radius,
  },
  catinfoContainer: {
    width: '65%',
    paddingHorizontal: hp(2),
  },
  catTitle: {
    flex: 1,
    ...FONTS.h2,
  },
  numRec: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default styles;
