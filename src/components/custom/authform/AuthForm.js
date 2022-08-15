import React, {useState, useContext} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Styles & Icons
import styles from './style';
import Person from '@assets/icons/Person';
import CheckCircle from '@assets/icons/CheckCircle';
import Lock from '@assets/icons/Lock';
import EyeOff from '@assets/icons/EyeOff';
import Eye from '@assets/icons/Eye';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS} from '@constants';

// Components
import CustomPressable from '../button/CustomPressable';

//hooks
import {useLocal} from '../../../hooks';

const AuthForm = (props) => {
  const {onPress, authRoute, toNavigate} = props;
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: false,
  });
  const local = useLocal();

  // input
  const nameInputChange = (val) => {
    setData({
      ...data,
      username: val,
    });
  };
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        password: val,
        confirm_secureTextEntry: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        confirm_secureTextEntry: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* Header */}
        <View style={styles.safeContent}>
          <View style={styles.header}>
            <Text style={styles.text_header}>
              {authRoute === 'Login' ? local.logHeader : local.regHeader}
            </Text>
          </View>

          {/* footer */}
          <View style={styles.footer}>
            {/* UserName */}
            {authRoute === 'Sign up' ? (
              <>
                <Text style={styles.text_footer}>
                  {local.placeholderUserNameTitle}
                </Text>
                <View style={styles.action}>
                  <Person width={hp(4)} height={hp(4)} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={local.placeholderUsername}
                    onChangeText={(val) => nameInputChange(val)}
                  />
                </View>
              </>
            ) : null}

            {/* Email */}
            <Text style={styles.text_footer}>
              {local.placeholderEmailTitle}
            </Text>
            <View style={styles.action}>
              <Person width={hp(4)} height={hp(4)} />
              <TextInput
                style={styles.textInput}
                placeholder={local.placeholderEmail}
                onChangeText={(val) => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <CheckCircle width={hp(4)} height={hp(4)} />
              ) : null}
            </View>

            {/* Password */}
            <Text style={styles.text_footer}>
              {local.placeholderPasswordTitle}
            </Text>
            <View style={styles.action}>
              <Lock width={hp(4)} height={hp(4)} />
              <TextInput
                placeholder={local.placeholderPassword}
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              {data.confirm_secureTextEntry ? (
                <TouchableOpacity onPress={updateSecureTextEntry}>
                  {data.secureTextEntry ? (
                    <EyeOff width={hp(4)} height={hp(4)} />
                  ) : (
                    <Eye width={hp(4)} height={hp(4)} />
                  )}
                </TouchableOpacity>
              ) : null}
            </View>

            {/* Button */}
            <LinearGradient
              colors={[COLORS.darkLime, COLORS.lime]}
              style={styles.gradientContainer}>
              <CustomPressable
                title={authRoute}
                titleStyle={styles.titleStyle}
                btnStyle={styles.btnStyle}
                onPress={() => onPress(data)}
              />
            </LinearGradient>
            <CustomPressable
              title={authRoute === 'Sign up' ? local.login : local.register}
              titleStyle={styles.titleStyle2}
              btnStyle={styles.btnStyle2}
              onPress={toNavigate}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;
