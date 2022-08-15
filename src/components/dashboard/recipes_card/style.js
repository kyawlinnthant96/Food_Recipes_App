import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONTS, COLORS, SIZES} from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGreen,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 3,
  },
  imgContainer: {
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: hp(10),
  },
  textContainer: {
    flex: 1,
    paddingVertical: SIZES.radius,
  },
  text: {
    width: '80%',
    ...FONTS.body5,
  },
  btnTextContent: {
    marginTop: hp(1),
  },
  btnText: {
    color: COLORS.darkGreen,
    textDecorationLine: 'underline',
    ...FONTS.h5,
  },
});

export default styles;
