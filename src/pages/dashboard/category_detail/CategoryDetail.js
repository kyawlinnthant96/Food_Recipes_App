import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';
// components
import {RecipeLists, setToastMsg} from '@components';
// data
import {getRecipes, getCategoryName} from '@data/MockData';

// Styles
import styles from './style';

const CategoryDetail = ({route, navigation}) => {
  const categoryData = route.params?.data;
  const recipes = useSelector(state => state.recList.recipesList);
  const categories = useSelector(state => state.catList.categoryLists);
  let recByCat = getRecipes(categoryData, recipes);
  const dispatch = useDispatch();

  const bookMarkHandler = itemId => {
    dispatch(actionRec.bookUpdateRecList(itemId));
  };

  const recDetailHandler = data => {
    navigation.navigate('ItemDetail', {data});
  };

  const goToCatData = data => {
    const title = getCategoryName(data, categories);
    navigation.navigate('CatDetail', {data, title});
  };

  return (
    <View style={styles.container}>
      <RecipeLists
        data={recByCat}
        catData={goToCatData}
        bookMarkAction={bookMarkHandler}
        recDetailAction={recDetailHandler}
      />
    </View>
  );
};

export default CategoryDetail;
