import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

// style
import styles from './style';
// components
import {RecipeLists} from '@components';
// data
import {
  getRecipesByIngredient,
  getIngredientUrl,
  getCategoryName,
} from '@data/MockData';

const IngredientInfo = ({route, navigation}) => {
  const ingredientId = route?.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const recipeByIng = getRecipesByIngredient(ingredientId);
  const title = route?.params?.title;

  const bookMarkHandler = () => {
    console.log('first');
  };
  const recDetailHandler = data => {
    navigation.navigate('ItemDetail', {data});
  };
  const goToCatData = data => {
    const title = getCategoryName(data);
    navigation.navigate('CatDetail', {data, title});
  };

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: ingredientUrl}}
        />
      </View>
      {/* bottom */}
      <Text style={styles.infoTitle}>Recipes By {title}</Text>
      <View style={styles.infoContainer}>
        <RecipeLists
          data={recipeByIng}
          catData={goToCatData}
          bookMarkAction={bookMarkHandler}
          recDetailAction={recDetailHandler}
        />
      </View>
    </View>
  );
};

export default IngredientInfo;
