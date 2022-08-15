import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, SIZES, FONTS} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  cover: {
    backgroundColor: 'rgba(0,0,0, .5)',
  },
  sheet: {
    position: 'absolute',
    top: hp(100),
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  popup: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: hp(2),
    minHeight: hp(20),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  popupTitle: {
    paddingVertical: hp(1),
    borderBottomWidth: hp(0.1),
    width: '100%',
  },
  popBtnContent: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: hp(0.1),
  },
  popupBtnText: {
    marginHorizontal: hp(1),
    color: COLORS.black,
    ...FONTS.body5,
  },
  profileBoxContainer: {
    width: wp(30),
    height: hp(15),
    backgroundColor: '#ddd',
    borderRadius: hp(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: hp(0.1),
    marginVertical: hp(5),
  },
  profileBox: {
    backgroundColor: COLORS.lightGray,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    width: wp(90),
    padding: hp(2),
  },
  infoBox: {
    marginBottom: hp(3),
  },
  label: {
    color: COLORS.black,
    ...FONTS.body4,
    marginBottom: hp(2),
  },
  inputField: {
    backgroundColor: COLORS.lightGray,
    borderBottomWidth: hp(0.1),
    paddingHorizontal: hp(2),
  },
  btnStyle: {
    backgroundColor: COLORS.darkLime,
    width: wp(60),
    paddingVertical: hp(1.5),
    borderRadius: SIZES.radius,
  },
  titleStyle: {
    textAlign: 'center',
    color: COLORS.white,
    ...FONTS.h4,
  },
});

export default styles;
