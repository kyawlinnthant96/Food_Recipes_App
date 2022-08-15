import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// style
import styles from './style';

const CategoryCard = ({
  containerStyle,
  categoryItem,
  onPress,
  numOfRecByCat,
}) => {
  return (
    <TouchableOpacity
      style={[styles.itemContainer, {...containerStyle}]}
      onPress={() => onPress(categoryItem)}>
      {/* Image */}
      <Image
        source={{uri: categoryItem.photo_url}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.catinfoContainer}>
        <Text style={styles.catTitle}>{categoryItem.name}</Text>
        <Text style={styles.numRec}>{numOfRecByCat} recipes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
