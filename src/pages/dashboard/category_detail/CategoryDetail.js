import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';
// components
import {RecipeLists, setToastMsg} from '@components';
// data
import {getRecipes} from '@data/MockData';

// Styles
import styles from './style';

const CategoryDetail = ({route, navigation}) => {
  const categoryData = route.params?.data;
  const recipes = useSelector((state) => state.recList.recipesList);
  let recByCat = getRecipes(categoryData.id, recipes);
  const dispatch = useDispatch();

  const bookMarkHandler = (itemId) => {
    dispatch(actionRec.bookUpdateRecList(itemId));
  };

  const recDetailHandler = (data) => {
    navigation.navigate('ItemDetail', {data});
  };

  return (
    <View style={styles.container}>
      <RecipeLists
        data={recByCat}
        bookMarkAction={bookMarkHandler}
        recDetailAction={recDetailHandler}
      />
    </View>
  );
};

export default CategoryDetail;
