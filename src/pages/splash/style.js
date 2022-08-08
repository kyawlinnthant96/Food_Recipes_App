import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  animateBox: {
    position: 'absolute',
    bottom: hp(20),
    ...FONTS.h2,
    color: COLORS.darkGreen,
  },
  welcomeText: {},
});

export default styles;
