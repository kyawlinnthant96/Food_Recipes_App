import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// pages
import CategoryListScreen from '../../pages/dashboard/category_list/CategoryList';
import CategoryDetailScreen from '../../pages/dashboard/category_detail/CategoryDetail';
import ItemDetailScreen from '../../pages/dashboard/item_detail/ItemDetail';
import IngDetailScreen from '../../pages/dashboard/ing_detail/IngDetail';
import IngredientInfoScreen from '../../pages/dashboard/ing_info/IngredientInfo';

// COLOR
import {COLORS, FONTS} from '@constants';
import styles from '../tabs/style';

const DashboardStack = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    let showRoutName = [
      'DashboradStack',
      'CatList',
      'RecipesStack',
      'BookmarkStack',
      'ProfileStack',
    ];

    let routeName = getFocusedRouteNameFromRoute(route);
    if (
      showRoutName.includes(routeName === undefined ? 'CatList' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: styles.tabStyle});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="CatList"
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
        name="CatList"
        component={CategoryListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CatDetail"
        component={CategoryDetailScreen}
        options={{
          title: 'Recipes Lists',
        }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IngInfo"
        component={IngredientInfoScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            ...FONTS.h4,
          },
        })}
      />
      <Stack.Screen
        name="IngDetail"
        component={IngDetailScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            ...FONTS.h4,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
