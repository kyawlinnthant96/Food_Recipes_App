import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getBookmarkList} from '../../../data/MockData';

// Styles
import styles from './style';
import BookmarkIcon from '@assets/icons/Bookmark';
// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionBook from '../../../store/action/bookmark';
// components
import {Bookmark, CustomPressable, setToastMsg} from '../../../components';

// hooks
import {useLocal} from '../../../hooks';

const BookmarkList = ({navigation}) => {
  const local = useLocal();
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
    try {
      dispatch(actionBook.removeBookmark(itemId));
      setToastMsg(local.rmvSuccess);
    } catch (error) {
      setToastMsg(local.error);
    }
  };

  const goToCreate = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
      {bmList.length > 0 ? (
        <Bookmark
          data={bmList}
          goToDetalAction={recDetailHandler}
          deleteAction={deleteHandler}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.cardContainer}>
            <BookmarkIcon width={100} height={100} color="gray" />
            <Text style={styles.cardText}>{local.emptyCard}</Text>
          </View>
        </View>
      )}
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
