import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  tabStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderTopColor: 'transparent',
    height: wp(18),
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLine: {
    backgroundColor: COLORS.darkLime,
    height: 5,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
  },
});

export default styles;
