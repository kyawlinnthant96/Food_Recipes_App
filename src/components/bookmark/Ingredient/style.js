import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: hp(2),
  },

  listContainer: {
    width: wp(90),
    height: hp(15),
    backgroundColor: COLORS.white,
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.body5,
  },
  titleStyle: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  btnStyle: {
    marginHorizontal: hp(2),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  label: {
    color: COLORS.black,
    ...FONTS.body4,
  },
  input: {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    marginLeft: hp(2),
    borderRadius: SIZES.radius,
    paddingHorizontal: hp(2),
    ...FONTS.body5,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  absolute: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '30%',
    backgroundColor: COLORS.darkLime,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
});

export default styles;
