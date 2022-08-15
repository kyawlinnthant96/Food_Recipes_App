import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// pages
import MainProfileScreen from '../../pages/profile/main_profile/MainProfile';
import EditProfileScreen from '../../pages/profile/edit_profile/EditProfile';
import OwnRecipesScreen from '../../pages/profile/your_own_recipe_list/OwnRecipes';
// style
import styles from '../tabs/style';
import {COLORS, FONTS, SIZES} from '@constants';

const ProfileStack = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    let showRoutName = [
      'DashboradStack',
      'Profile',
      'RecipesStack',
      'BookmarkStack',
      'ProfileStack',
    ];

    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRoutName.includes(routeName === undefined ? 'Profile' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: styles.tabStyle});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.darkLime,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          ...FONTS.h3,
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={MainProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPro"
        component={EditProfileScreen}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="OwnRecipe"
        component={OwnRecipesScreen}
        options={{title: 'Your Recipes'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
