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
  catCardContainer: {
    marginHorizontal: SIZES.padding,
  },

  header: {
    backgroundColor: COLORS.darkLime,
    width: '100%',
    paddingVertical: hp(2),
    paddingHorizontal: hp(1),
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h2,
  },
  listContainer: {
    width: wp(90),
    height: hp(30),
    marginVertical: hp(1.5),
    overflow: 'hidden',
    borderRadius: SIZES.radius,
  },
  catImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.transparentBlack5,
    bottom: 0,
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    zIndex: 99,
    opacity: 0.9,
  },
  catTitle: {
    color: COLORS.white,
    ...FONTS.largeTitle,
  },
  numberOfRecipes: {
    color: COLORS.white,
    ...FONTS.h4,
  },
});

export default styles;
