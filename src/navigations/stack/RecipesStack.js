import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import RecipeListScreen from '../../pages/recipe/recipes_List/RecipeList';
import RecipeDetailScreen from '../../pages/recipe/recipes_detail/RecipeDetail';

const RecipesStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Recipe"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Recipe" component={RecipeListScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

export default RecipesStack;
