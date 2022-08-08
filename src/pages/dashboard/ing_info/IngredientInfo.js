import {View, Text} from 'react-native';
import React from 'react';
// components
import {IngredientByRecipe} from '@components';
// data
import {
  getRecipesByIngredient,
  getIngredientUrl,
  getCategoryName,
} from '@data/MockData';

const IngredientInfo = ({route, navigation}) => {
  const ingredientId = route?.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const title = route?.params?.title;
  return (
    <View>
      {/* header */}

      <IngredientByRecipe />
    </View>
  );
};

export default IngredientInfo;
