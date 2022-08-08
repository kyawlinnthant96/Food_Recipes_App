import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '@constants';
//styles
import styles from './style';

const ProfileHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.loginBackground} />
      </View>
      <View style={styles.profileName}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <TouchableOpacity style={styles.btnContent} onPress={props.logoutAction}>
        <Text style={styles.btn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
