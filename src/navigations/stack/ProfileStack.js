import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// pages
import FinishRecipeListScreen from '../../pages/profile/complete_recipes_list/FinishRecipeList';
import YourRecipeListScreen from '../../pages/profile/your_recipes_list/YourRecipeList';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Finish"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Finish" component={FinishRecipeListScreen} />
      <Stack.Screen name="YourRecipe" component={YourRecipeListScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
