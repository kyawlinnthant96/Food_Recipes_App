import {View, Text} from 'react-native';
import React from 'react';

// style
import styles from './style';

export default function CategoryHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Category</Text>
    </View>
  );
}
