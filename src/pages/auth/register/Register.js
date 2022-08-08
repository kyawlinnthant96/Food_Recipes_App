import React, {useContext} from 'react';
import {View, Text} from 'react-native';

// firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// context
import {DataContext} from '@context/DataContext/DataContext';
// MMKV Storage
import {localStorage} from '@utils/localStorage';
// hooks
import {useLocal} from '@hooks';
// components
import {AuthFrom, setToastMsg} from '@components';

const Register = ({route, navigation}) => {
  const {routeName} = route.params;
  const {getUserInfo, getAuth} = useContext(DataContext);
  const local = useLocal();

  const registerHandler = value => {
    const {username, email, password} = value;
    if (email.length <= 0 || password.length <= 0) {
      setToastMsg(local.validLogError);
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const data = {
          username: username,
          email: email,
          password: password,
        };
        const user_uid = response.user._user.uid;
        firestore().collection('users').doc(user_uid).set(data);
        localStorage.setItem('@UserId:token', user_uid);
        getUserInfo(data);
        getAuth(true);
        setToastMsg(local.regSuccess);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setToastMsg(local.duplicateEmailError);
        } else {
          setToastMsg(local.error);
        }
        console.log(error.message);
      });
  };

  const screenHandler = () => {
    navigation.navigate('Login', {routeName: 'Login'});
  };

  return (
    <AuthFrom
      authRoute={routeName}
      onPress={registerHandler}
      toNavigate={screenHandler}
    />
  );
};

export default Register;
