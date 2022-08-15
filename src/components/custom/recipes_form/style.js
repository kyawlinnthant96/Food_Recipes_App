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
    width: wp(40),
    height: hp(20),
    backgroundColor: '#ddd',
    borderStyle: 'dashed',
    borderWidth: hp(0.1),
    borderRadius: hp(1),
    overflow: 'hidden',
    margin: hp(2),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  addContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cover: {
    backgroundColor: COLORS.transparentBlack1,
  },
  sheet: {
    position: 'absolute',
    top: hp(100),
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  popup: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: hp(20),
    padding: hp(2),
  },
  popupTitle: {
    paddingVertical: hp(1),
    borderBottomWidth: hp(0.1),
  },
  popBtnContent: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    alignItems: 'center',
    borderBottomWidth: hp(0.1),
  },
  popupBtnText: {
    marginHorizontal: hp(1),
    color: COLORS.black,
    ...FONTS.body5,
  },
  // input style
  inputContainer: {
    paddingVertical: hp(0.5),
    marginBottom: hp(1),
    marginHorizontal: hp(2),
  },
  inputTitle: {
    color: COLORS.black,
    ...FONTS.h4,
  },
  inputField: {
    borderRadius: hp(5),
    marginTop: hp(2),
    backgroundColor: '#ddd',
    paddingHorizontal: hp(2),
    ...FONTS.body5,
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  inputTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    marginHorizontal: hp(2),
  },
  descriInput: {
    borderRadius: SIZES.radius,
    marginTop: hp(2),
    marginBottom: hp(20),
    backgroundColor: '#ddd',
    paddingHorizontal: hp(2),
    ...FONTS.body5,
    textAlignVertical: 'top',
    height: hp(40),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  inputFieldTime: {
    backgroundColor: '#ddd',
    marginLeft: hp(3),
    borderRadius: hp(5),
    paddingHorizontal: hp(2),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.white,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  addContainer: {
    backgroundColor: COLORS.lightGray,
    marginVertical: hp(2),
    width: '90%',
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
    marginHorizontal: hp(2),
    borderRadius: hp(5),
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#757575',
    shadowOpacity: hp(0.5),
    elevation: 5,
    flexDirection: 'row',
  },
  addText: {
    color: COLORS.black,
    ...FONTS.body5,
    marginLeft: hp(1),
  },
  line: {
    width: '90%',
    borderColor: COLORS.black,
    borderWidth: hp(0.1),
    marginHorizontal: hp(2),
    marginVertical: hp(2),
  },
  ingContainer: {
    backgroundColor: COLORS.lightGray,
    width: '90%',
    height: hp(10),
    marginHorizontal: hp(2),
    marginVertical: hp(1),
    flexDirection: 'row',
    borderWidth: hp(0.1),
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.gray,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  imgContainer: {
    width: '45%',
    height: '100%',
  },
  ingImage: {
    width: '100%',
    height: '100%',
  },
  info: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    color: COLORS.black,
    ...FONTS.body4,
  },
  infoUnit: {
    color: COLORS.gray,
    ...FONTS.body5,
  },
  doneContent: {
    backgroundColor: COLORS.darkLime,
    width: wp(80),
    marginVertical: hp(2),
    marginHorizontal: hp(4),
    paddingVertical: hp(2),
    position: 'absolute',
    bottom: 0,
    borderRadius: SIZES.radius,
  },
  doneText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.h4,
  },
  deleteBtn: {
    width: '10%',
    height: hp(5),
    backgroundColor: COLORS.darkLime,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: SIZES.radius,
  },
});

export default styles;