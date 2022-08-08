import React, {useContext} from 'react';

// components
import {AuthFrom, setToastMsg} from '@components';
// firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// MMKV
import {localStorage} from '@utils/localStorage';
// context
import {DataContext} from '@context/DataContext/DataContext';
// hooks
import {useLocal} from '@hooks';

const Login = ({route, navigation}) => {
  const {routeName} = route.params;
  const {getUserInfo} = useContext(DataContext);
  const local = useLocal();

  const loginHandler = value => {
    const {email, password} = value;
    if (email.length <= 0 || password.length <= 0) {
      setToastMsg(local.validLogError);
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const user_uid = response.user.uid;
        console.log(user_uid);
        firestore()
          .collection('users')
          .doc(user_uid)
          .get()
          .then(user => {
            if (user.exists) {
              localStorage.setItem('@UserId:token', user_uid);
              getUserInfo(user.data());
              setToastMsg(local.logSuccess);
            } else {
              setToastMsg(local.logError);
            }
          })
          .catch(error => {
            setToastMsg(local.error);
            console.log(error);
          });
      })
      .catch(error => {
        setToastMsg(local.error);
        console.log(error);
      });
  };
  const screenHandler = () => {
    navigation.navigate('Register', {routeName: 'Sign up'});
  };

  return (
    <AuthFrom
      authRoute={routeName}
      onPress={loginHandler}
      toNavigate={screenHandler}
    />
  );
};

export default Login;
