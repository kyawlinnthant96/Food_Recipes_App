import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';

// Redux
import {useSelector, useDispatch} from 'react-redux';
// Styles
import styles from './style';
import Bookmark from '../../../../assets/icons/Bookmark';
import * as actionRec from '../../../store/action/recipes';
// components

const RecipeList = ({navigation}) => {
  const recipeLists = useSelector(state => state.recList.recipesList);
  const dispatch = useDispatch();
  console.log('update List', recipeLists);
  const bookAction = itemId => {
    let newData = recipeLists.map(item =>
      item.recipeId === itemId ? {...item, isBookMark: !item.isBookMark} : item,
    );
    dispatch(actionRec.bookUpdateRecList(newData));
  };

  return (
    <ScrollView>
      <Text style={{fontSize: 40, color: '#f89090'}}>RecipeList</Text>
      {recipeLists.map(item => {
        return (
          <TouchableOpacity
            onPress={() => bookAction(item.recipeId)}
            key={`${item.recipeId}`}>
            <Text style={{fontSize: 20, color: '#000'}}>{item.title}</Text>
            <Bookmark
              width={100}
              height={100}
              color={item.isBookMark ? 'red' : 'green'}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default RecipeList;
