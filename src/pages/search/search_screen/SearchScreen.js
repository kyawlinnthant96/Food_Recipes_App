import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';

// Redux
import {useSelector, useDispatch} from 'react-redux';
// Styles
import styles from './style';
import * as actionRec from '../../../store/action/recipes';
// components

const SearchRecipe = ({navigation}) => {
  const recipeLists = useSelector(state => state.recList.recipesList);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
export default SearchRecipe;
