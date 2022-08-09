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
  imageContainer: {
    width: wp(100),
    height: hp(30),
    borderBottomColor: COLORS.gray,
    borderBottomWidth: hp(0.3),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoTitle: {
    color: COLORS.black,
    marginVertical: hp(3),
    paddingHorizontal: hp(3),
    ...FONTS.h2,
  },
});

export default styles;
