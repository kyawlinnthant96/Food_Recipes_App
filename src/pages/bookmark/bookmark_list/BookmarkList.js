import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getBookmarkList} from '../../../data/MockData';

// Styles
import styles from './style';
// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionBook from '../../../store/action/bookmark';
// components
import {Bookmark, CustomPressable} from '../../../components';

const BookmarkList = ({navigation}) => {
  const recipes = useSelector((state) => state.recList.recipesList);
  const bmList = useSelector((state) => state.bookList.bookmarkList);
  const dispatch = useDispatch();

  useEffect(() => {
    const setBmList = getBookmarkList(recipes);
    dispatch(actionBook.addToBookmark(setBmList));
  }, [recipes]);

  const recDetailHandler = (data) => {
    navigation.navigate('ItemDetail', {data});
  };

  const deleteHandler = (itemId) => {
    dispatch(actionBook.removeBookmark(itemId));
  };

  const goToCreate = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
      <Bookmark
        data={bmList}
        goToDetalAction={recDetailHandler}
        deleteAction={deleteHandler}
      />
      <CustomPressable
        title="Create Recipes"
        titleStyle={styles.titleStyle}
        btnStyle={styles.btnStyle}
        onPress={goToCreate}
      />
    </View>
  );
};

export default BookmarkList;
