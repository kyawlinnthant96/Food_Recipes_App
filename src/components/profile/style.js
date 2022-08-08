import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(15),
    backgroundColor: 'orange',
    position: 'relative',
    flexDirection: 'row',
    borderBottomEndRadius: hp(5),
    borderBottomStartRadius: hp(5),
    marginBottom: hp(2),
  },
  imageContainer: {
    width: wp(30),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    borderRadius: hp(10),
    borderWidth: hp(0.3),
    borderColor: '#fff',
  },
  profileName: {
    width: wp(50),
    height: '100%',
    justifyContent: 'flex-end',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(1),
  },
  name: {
    fontSize: hp(2.6),
    color: '#666',
    fontFamily: 'Poppins-Bold',
  },
  btnContent: {
    position: 'absolute',
    right: hp(3),
    top: hp(3),
  },
  btn: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(2),
    color: 'crimson',
  },
});

export default styles;
