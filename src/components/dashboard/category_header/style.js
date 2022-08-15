import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    marginHorizontal: SIZES.padding,
  },
  header: {
    flex: 1,
    ...FONTS.h2,
  },
});

export default styles;
