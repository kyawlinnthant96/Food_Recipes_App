import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// styles
import styles from './style';
import {images, COLORS} from '@constants';
import Language from '../../../../assets/icons/Language';

// hooks
import {useLocal} from '../../../hooks';
// components
import {CustomPressable, LanguageBox} from '@components';
// storage
import {localStorage} from '../../../utils/localStorage';
// context
import {DataContext} from '../../../context/DataContext/DataContext';
import language from '../../../data/language';

const Welcome = ({navigation}) => {
  const {getLang, lang} = useContext(DataContext);
  const [langOption, setlangOption] = useState(false);
  const [langData, setlangData] = useState(language);
  const local = useLocal();

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
  // language
  const langHandler = () => {
    setlangOption(true);
  };

  return (
    <View style={styles.container}>
      {/* top  section*/}
      <View style={styles.topContainer}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.loginImage}
          resizeMode="cover">
          <TouchableOpacity style={styles.langButton} onPress={langHandler}>
            <Language width={40} height={40} color={COLORS.white} />
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.shade}>
            <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* bottom section */}
      <View style={styles.bottomContainer}>
        <Text style={styles.para}>
          Discover more local or international recipes in your hand and cooking
          it easily!
        </Text>
        <CustomPressable
          title={local.login}
          titleStyle={styles.loginTitle}
          btnStyle={styles.loginBtn}
          onPress={() => navigation.navigate('Login', {routeName: local.login})}
        />
        <CustomPressable
          title={local.register}
          titleStyle={styles.regTitle}
          btnStyle={styles.regBtn}
          onPress={() =>
            navigation.replace('Register', {routeName: local.register})
          }
        />
      </View>
      {langOption && (
        <LanguageBox handleChange={languageHander} langList={langData} />
      )}
    </View>
  );
};

export default Welcome;
