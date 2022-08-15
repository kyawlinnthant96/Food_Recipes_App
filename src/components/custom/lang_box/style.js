import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.transparentBlack5,
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  langBox: {
    backgroundColor: COLORS.white,
    width: wp(50),
    padding: hp(1),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 5,
    borderRadius: SIZES.radius,
  },
  title: {
    color: COLORS.black,
    ...FONTS.body5,
  },
  listContainer: {
    flexDirection: 'row',
    paddingVertical: hp(0.5),
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  langText: {
    color: COLORS.black,
    marginLeft: hp(1),
    ...FONTS.body5,
  },
});

export default styles;
