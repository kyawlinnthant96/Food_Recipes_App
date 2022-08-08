import {View, Text} from 'react-native';
import React, {useContext} from 'react';

// components
import ProfileHeader from '../../../components/profile/ProfileHeader';
import setToastMsg from '../../../components/custom/toast/Toast';
// firebase
import auth from '@react-native-firebase/auth';
// Styles
import styles from './style';
// context
import {DataContext} from '../../../context/DataContext/DataContext';
import {localStorage} from '../../../utils/localStorage';

const FinishRecipeList = () => {
  const {getAuth, info} = useContext(DataContext);
  const token = localStorage.getItem('@UserId:token');

  const logoutHandler = async () => {
    await auth()
      .signOut()
      .then(() => {
        setToastMsg('Logout Successfully');
        localStorage.removeItem('@UserId:token');
        getAuth(false);
      });
  };
  return (
    <View style={styles.container}>
      <ProfileHeader logoutAction={logoutHandler} name={info.username} />
    </View>
  );
};

export default FinishRecipeList;
