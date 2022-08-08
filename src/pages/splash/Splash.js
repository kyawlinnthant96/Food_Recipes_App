import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

// Styles
import styles from './style';
import {images, COLORS} from '@constants';

const Splash = () => {
  const position = useRef(new Animated.Value(10)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(position, {
          toValue: 140,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(),
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView source={require('./Splash.json')} autoPlay loop />
      <Animated.Text
        style={[
          styles.animateBox,
          {opacity: opacity, transform: [{translateX: position}]},
        ]}>
        Welcome
      </Animated.Text>
    </View>
  );
};

export default Splash;
