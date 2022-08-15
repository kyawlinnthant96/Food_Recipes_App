import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS, SIZES} from '@constants';

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    marginHorizontal: hp(2),
  },
  favContainer: {
    backgroundColor: COLORS.white,
    height: hp(15),
    justifyContent: 'space-evenly',
    paddingHorizontal: hp(2),
    paddingVertical: hp(2),
    borderRadius: SIZES.radius,
    marginBottom: hp(1),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: hp(1),
    color: COLORS.black,
    ...FONTS.h4,
  },
  titleDescription: {
    alignItems: 'center',
  },
  descText: {
    color: COLORS.gray,
  },
  utilContainer: {
    marginTop: hp(2),
    backgroundColor: COLORS.white,
    paddingHorizontal: hp(2),
    paddingVertical: hp(2),
    borderRadius: SIZES.radius,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  listContaier: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    borderBottomWidth: hp(0.1),
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  listText: {
    color: COLORS.black,
    ...FONTS.body5,
    marginLeft: hp(3),
  },
});

export default styles;
