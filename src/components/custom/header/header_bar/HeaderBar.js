import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// style
import styles from './style';
// hook
import {useLocal} from '../../../../hooks';

const HeaderBar = (props) => {
  const {userName, userPhoto} = props;
  const local = useLocal();
  return (
    <View style={styles.container}>
      <View style={styles.welcomText}>
        <Text style={styles.wel1}>
          {local.greet} {userName}
        </Text>
        <Text style={styles.wel2}>{local.greet2}</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: userPhoto
              ? userPhoto
              : 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
