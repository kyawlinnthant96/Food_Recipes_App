import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: wp(100),
    height: hp(100),
    zIndex: 99,
  },
  btnStyle: {
    width: wp(100),
    backgroundColor: COLORS.yellow,
    paddingVertical: hp(3),
  },
  titleStyle: {
    textAlign: 'center',
    color: COLORS.black,
    ...FONTS.body4,
  },
});

export default styles;
