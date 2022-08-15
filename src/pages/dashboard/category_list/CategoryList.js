import React, {useContext, useState, useEffect} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import * as actionCat from '@store/action/category';
import * as actionIng from '@store/action/ingredients';
import * as actionRec from '@store/action/recipes';

// data
import {recipes, ingredients, categories} from '@data/SampleData';
import {getNumberOfRecipes} from '@data/MockData';

// Styles
import styles from './style';
import {COLORS, FONTS, SIZES} from '@constants';

// components
import {
  CategoryCard,
  HeaderBar,
  RecipeCard,
  Trending,
  CategoryHeader,
} from '@components';

// context
import {DataContext} from '../../../context/DataContext/DataContext';

const CategoryList = ({navigation}) => {
  useEffect(() => {
    addLoadData();
  }, []);

  const addLoadData = () => (
    dispatch(actionCat.addToCat(categories)),
    dispatch(actionRec.loadRecList(recipes)),
    dispatch(actionIng.loadIngList(ingredients))
  );
  const {info} = useContext(DataContext);
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.catList.categoryLists);
  const recipesData = useSelector((state) => state.recList.recipesList);

  const detailList = (data) => {
    const title = data.name;
    navigation.navigate('CatDetail', {data, title});
  };

  const goToRecipeLists = () => {
    navigation.navigate('Search', {screen: 'Recipe'});
  };

  const recDetailHandler = (data) => {
    navigation.navigate('ItemDetail', {data});
  };

  const renderCat = ({item}) => {
    return (
      <CategoryCard
        containerStyle={styles.catCardContainer}
        categoryItem={item}
        numOfRecByCat={getNumberOfRecipes(item.id, recipesData)}
        onPress={detailList}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={catData}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <HeaderBar userName={info.username} userPhoto={info.photo_url} />
            {/* See Recipes Card*/}
            <RecipeCard
              noOfRecipes={recipesData.length}
              onPress={goToRecipeLists}
            />
            {/* Trending Section */}
            <Trending
              trendData={recipesData}
              recDetailAction={recDetailHandler}
            />
            {/* category header */}
            <CategoryHeader />
          </View>
        }
        renderItem={renderCat}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default CategoryList;
