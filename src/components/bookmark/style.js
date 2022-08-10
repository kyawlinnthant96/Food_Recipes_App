import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    width: wp(100),
    color: COLORS.black,
    paddingHorizontal: hp(2),
    paddingVertical: hp(1.5),
    ...FONTS.body1,
  },
  bookList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp(30),
    justifyContent: 'center',
  },
  listContainer: {
    width: wp(45),
    height: hp(28),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.darkLime,
    shadowOpacity: hp(0.5),
    elevation: 3,
    marginHorizontal: wp(1.5),
    marginVertical: hp(0.8),
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: hp(15),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '100%',
    height: hp(10),
    padding: hp(1),
    justifyContent: 'space-between',
  },
  titleText: {
    color: COLORS.black,
    ...FONTS.h4,
  },
  ingText: {
    color: COLORS.gray,
    ...FONTS.h5,
  },
  option: {
    backgroundColor: COLORS.lightGray,
    position: 'absolute',
    width: wp(8),
    height: hp(4),
    right: 0,
    top: 0,
    margin: hp(1),
    justifyContent: 'center',
    borderRadius: hp(5),
    padding: hp(0.5),
  },
});

export default styles;
