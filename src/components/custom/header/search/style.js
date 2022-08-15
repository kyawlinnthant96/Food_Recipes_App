import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    height: hp(5),
    alignItems: 'center',
    borderColor: COLORS.gray,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    marginHorizontal: SIZES.padding,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 3,
  },
  input: {
    marginLeft: SIZES.radius,
    ...FONTS.body5,
  },
});

export default styles;
