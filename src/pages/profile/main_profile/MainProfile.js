import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

// components
import {
  ProfileHeader,
  setToastMsg,
  UserStatusSetting,
  LanguageBox,
} from '../../../components';

// firebase
import auth from '@react-native-firebase/auth';
// Styles
import styles from './style';
// context
import {DataContext} from '../../../context/DataContext/DataContext';
import {localStorage} from '../../../utils/localStorage';
import language from '@data/language';

const MainProfile = ({navigation}) => {
  const {getAuth, info, getLang} = useContext(DataContext);
  const [langOption, setlangOption] = useState(false);
  const [langData, setlangData] = useState(language);
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

  // language
  const langHandler = () => {
    setlangOption(true);
  };
  const languageHander = (value) => {
    let newData = [...langData];
    let temp = newData.map((list) => {
      return {
        ...list,
        isChecked: list.value === value,
      };
    });
    setlangData(temp);
    let selectLang = temp
      .filter((list) => list.isChecked)
      .map((item) => item.value);
    getLang(...selectLang);
    localStorage.setItem('@User:lang', ...selectLang);
    setlangOption(false);
  };

  const editProfile = () => {
    navigation.navigate('EditPro');
  };

  const goToYourRecipe = () => {
    navigation.navigate('OwnRecipe');
  };

  const goToBookmarkHandler = () => {
    navigation.navigate('Collect', {
      screen: 'Bookmark',
    });
  };

  const aboutHandler = () => {
    setToastMsg('Comming soon');
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        editProfileAction={editProfile}
        userName={info?.username}
        profilePic={info?.photo_url}
      />
      <UserStatusSetting
        logoutAction={logoutHandler}
        languageAction={langHandler}
        yourRecipeList={goToYourRecipe}
        goToBookmarkAction={goToBookmarkHandler}
        aboutAction={aboutHandler}
      />
      {langOption && (
        <LanguageBox handleChange={languageHander} langList={langData} />
      )}
    </View>
  );
};

export default MainProfile;
