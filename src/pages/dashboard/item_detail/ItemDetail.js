import {View, Text} from 'react-native';
import React from 'react';

// components
import {RecipeDetail} from '@components';
// styles
import styles from './style';

const ItemDetail = ({route, navigation}) => {
  const item = route.params.data;

  const backHandler = () => {
    navigation.goBack();
  };
  const ingHandler = () => {
    let ingredients = item.ingredients;
    let title = 'Ingredients for ' + item.title;
    navigation.navigate('IngDetail', {ingredients, title});
  };

  return (
    <RecipeDetail
      data={item}
      backAction={backHandler}
      goIngAction={ingHandler}
    />
  );
};

export default ItemDetail;
