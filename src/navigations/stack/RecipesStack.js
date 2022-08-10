import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import SearchRecipeScreen from '../../pages/search/search_screen/SearchScreen';

const RecipesStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchRecipeScreen} />
    </Stack.Navigator>
  );
};

export default RecipesStack;
