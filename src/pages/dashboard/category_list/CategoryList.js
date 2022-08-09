import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import * as actionCat from '@store/action/category';
import * as actionIng from '@store/action/ingredients';
import * as actionRec from '@store/action/recipes';

// data
import {recipes, ingredients, categories} from '@data/SampleData';
import {getNumberOfRecipes, getCategoryName} from '@data/MockData';

// Styles
import styles from './style';

const CategoryList = ({navigation}) => {
  const dispatch = useDispatch();
  const catData = useSelector(state => state.catList.categoryLists);

  useEffect(() => {
    dispatch(actionCat.addToCat(categories));
    dispatch(actionRec.loadRecList(recipes));
    dispatch(actionIng.loadIngList(ingredients));
  }, []);

  const detailList = data => {
    const title = data.name;
    navigation.navigate('CatDetail', {data, title});
  };

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => detailList(item)}>
        <SafeAreaView style={styles.listContainer}>
          <ImageBackground
            source={{uri: item.photo_url}}
            resizeMode="cover"
            style={styles.catImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.catTitle}>{item.name}</Text>
              <Text style={styles.numberOfRecipes}>
                {getNumberOfRecipes(item.id)} recipes
              </Text>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Category List</Text>
      </View>

      <FlatList
        data={catData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComponent}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </View>
  );
};

export default CategoryList;
