import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// style
import styles from './style';

const RecipeCard = (props) => {
  const {noOfRecipes, onPress} = props;
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/system/recipe.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          You have {noOfRecipes} recipes that you haven't try yet
        </Text>
        <TouchableOpacity style={styles.btnTextContent} onPress={onPress}>
          <Text style={styles.btnText}>See Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecipeCard;
