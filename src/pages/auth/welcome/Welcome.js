import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// styles
import styles from './style';
import {images, COLORS} from '@constants';
// hooks
import {useLocal} from '../../../hooks';
// components
import {CustomPressable} from '@components';

const Welcome = ({navigation}) => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      {/* top  section*/}
      <View style={styles.topContainer}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.loginImage}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.shade}>
            <Text style={styles.title}>{local.welcomeText}</Text>
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
          onPress={() => navigation.navigate('Login', {routeName: 'Login'})}
        />
        <CustomPressable
          title={local.register}
          titleStyle={styles.regTitle}
          btnStyle={styles.regBtn}
          onPress={() => navigation.replace('Register', {routeName: 'Sign up'})}
        />
      </View>
    </View>
  );
};

export default Welcome;
