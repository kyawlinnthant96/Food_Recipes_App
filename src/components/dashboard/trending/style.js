import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  title: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
  listContainer: {
    width: wp(55),
    height: hp(35),
    marginTop: SIZES.radius,
    marginRight: hp(2),
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.radius,
    paddingVertical: hp(0.5),
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
  catText: {
    color: COLORS.white,
    ...FONTS.h5,
  },
  cardInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: hp(10),
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTitle: {
    width: '70%',
    color: COLORS.white,
    ...FONTS.h5,
  },
  ingText: {
    color: COLORS.lightGray,
    ...FONTS.h5,
    fontSize: hp(1.5),
  },
});

export default styles;
