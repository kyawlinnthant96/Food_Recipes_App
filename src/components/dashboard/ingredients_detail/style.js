import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    alignItems: 'center',
  },

  listContainer: {
    backgroundColor: COLORS.darkLime,
    marginHorizontal: hp(0.5),
    marginTop: hp(1),
    width: wp(45),
    height: hp(20),
    borderColor: COLORS.gray,
    borderRadius: hp(2),
    borderWidth: hp(0.1),
    overflow: 'hidden',
  },
  imgContainer: {
    width: '100%',
    height: hp(14),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  listTitle: {
    textAlign: 'center',
    ...FONTS.body5,
    color: COLORS.white,
  },
  listAmount: {textAlign: 'center', ...FONTS.body5, color: COLORS.lightGray},
});

export default styles;
