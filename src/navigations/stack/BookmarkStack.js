import React, {useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// pages
import BookmarkListScreen from '../../pages/bookmark/bookmark_list/BookmarkList';
import CreateRecipes from '../../pages/crud/create_recipes/CreateRecipes';
import PickIngredientScreen from '../../pages/crud/ingredient_section/PickIngredient';
import EditRecipes from '../../pages/crud/edit_recipes/EditRecipes';

// style
import styles from '../tabs/style';
import {COLORS, FONTS, SIZES} from '@constants';
import BackArrow from '../../../assets/icons/BackArrow';

const BookmarkStack = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    let showRoutName = [
      'DashboradStack',
      'Bookmark',
      'RecipesStack',
      'BookmarkStack',
      'ProfileStack',
    ];

    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRoutName.includes(routeName === undefined ? 'Bookmark' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: styles.tabStyle});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="Bookmark"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.darkLime,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          ...FONTS.h3,
        },
      }}>
      <Stack.Screen name="Bookmark" component={BookmarkListScreen} />
      <Stack.Screen
        name="Create"
        component={CreateRecipes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={EditRecipes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IngList"
        component={PickIngredientScreen}
        options={({route, navigation}) => ({
          title: route.params.title,
          headerTitleStyle: {
            ...FONTS.h4,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default BookmarkStack;
