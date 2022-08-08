import {View, Text} from 'react-native';
import React from 'react';

// redux
import {useSelector} from 'react-redux';
// data
import {getAllIngredients, getIngredientName} from '@data/MockData';
// components
import {IngredientDetail} from '@components';
// style
import styles from './sytle';

const IngDetail = ({route, navigation}) => {
  const ingList = useSelector(state => state.ingList.ingredientsList);
  const item = route.params?.ingredients;
  const title = route.params?.title;
  const ingredientsArray = getAllIngredients(item, ingList);

  const onPressIngredients = item => {
    console.log('first');
    const title = getIngredientName(item.ingredientId);
    const ingredient = item.ingredientId;
    navigation.navigate('IngInfo', {ingredient, title});
  };

  return (
    <View style={styles.container}>
      {/* detail for curent recipes */}
      <IngredientDetail
        curData={ingredientsArray}
        curTitle={title}
        goToIngInfo={onPressIngredients}
      />
    </View>
  );
};

export default IngDetail;
