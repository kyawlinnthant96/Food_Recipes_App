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
  titleStyle: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.body5,
  },
  btnStyle: {
    position: 'absolute',
    bottom: hp(10),
    right: hp(1),
    backgroundColor: COLORS.darkLime,
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
    borderRadius: hp(5),
  },
});

export default styles;
