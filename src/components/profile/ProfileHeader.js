import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//styles
import styles from './style';

const ProfileHeader = (props) => {
  const {editProfileAction, profilePic, userName} = props;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{userName}</Text>
          <TouchableOpacity
            style={styles.editBtnContent}
            onPress={editProfileAction}>
            <Text style={styles.editText}>Edit your Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: profilePic
                ? profilePic
                : 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;
