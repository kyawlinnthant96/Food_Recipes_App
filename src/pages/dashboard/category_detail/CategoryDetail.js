import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';
// components
import {RecipeLists} from '@components';
// data
import {getRecipes, getCategoryName} from '@data/MockData';

// Styles
import styles from './style';

const CategoryDetail = ({route, navigation}) => {
  const categoryData = route.params?.data;
  let recByCat = getRecipes(categoryData?.id);
  const [recData, setRecData] = useState(recByCat);
  const dispatch = useDispatch();

  const bookMarkHandler = itemId => {
    //recipeId
    let index = recData.findIndex(x => x.recipeId === itemId);
    let spreadData = {...recData};
    console.log(recData);
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

  const goToCatData = data => {
    const title = getCategoryName(data);
    navigation.navigate('CatDetail', {data, title});
  };

  return (
    <View style={styles.container}>
      <RecipeLists
        data={recData}
        catData={goToCatData}
        bookMarkAction={bookMarkHandler}
        recDetailAction={recDetailHandler}
      />
    </View>
  );
};

export default CategoryDetail;
