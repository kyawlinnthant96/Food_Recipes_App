import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import RecipeSearchScreen from '../../pages/search/RecipeSearch';

const RecipesStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Recipe" component={RecipeSearchScreen} />
    </Stack.Navigator>
  );
};

export default RecipesStack;
