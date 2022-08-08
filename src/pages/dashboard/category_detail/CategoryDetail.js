import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';
// components
import {RecipeLists} from '@components';
// data
import {getRecipes} from '@data/MockData';

// Styles
import styles from './style';

const CategoryDetail = ({route, navigation}) => {
  const categoryData = route.params?.cat;
  let recByCat = getRecipes(categoryData?.id);
  const [recData, setRecData] = useState(recByCat);
  const dispatch = useDispatch();

  const bookMarkHandler = itemId => {
    dispatch(actionRec.bookUpdateRecList(itemId));
    // let dump;
    // for (const data of recData) {
    //   if (data.recipeId === itemId) {
    //     data.isBookMark = !data.isBookMark;
    //   }
    // }
    // dump = recData;
    // console.log(dump);
  };

  const recDetailHandler = data => {
    navigation.navigate('ItemDetail', {data});
  };

  return (
    <View style={styles.container}>
      <RecipeLists
        data={recData}
        catData={categoryData}
        bookMarkAction={bookMarkHandler}
        recDetailAction={recDetailHandler}
      />
    </View>
  );
};

export default CategoryDetail;
