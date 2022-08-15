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
import {useDispatch, useSelector} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';

const IngredientInfo = ({route, navigation}) => {
  const ingredientId = route?.params?.ingredient;
  const ingredient = useSelector((state) => state.ingList.ingredientsList);
  const recipes = useSelector((state) => state.recList.recipesList);
  const dispatch = useDispatch();

  const ingredientUrl = getIngredientUrl(ingredientId, ingredient);
  const recipeByIng = getRecipesByIngredient(ingredientId, recipes);
  const title = route?.params?.title;

  const bookMarkHandler = (itemId) => {
    dispatch(actionRec.bookUpdateRecList(itemId));
  };
  const recDetailHandler = (data) => {
    navigation.navigate('ItemDetail', {data});
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
          bookMarkAction={bookMarkHandler}
          recDetailAction={recDetailHandler}
        />
      </View>
    </View>
  );
};

export default IngredientInfo;
