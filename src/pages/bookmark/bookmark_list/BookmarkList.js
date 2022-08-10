import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getBookmarkList} from '../../../data/MockData';

// Styles
import styles from './style';
// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionBook from '../../../store/action/bookmark';
// components
import {HeaderBar, Bookmark} from '../../../components';
// context
import {DataContext} from '../../../context/DataContext/DataContext';

const BookmarkList = ({navigation}) => {
  const {optionBox, getOptionBox} = useContext(DataContext);
  const recipes = useSelector(state => state.recList.recipesList);
  const bmList = useSelector(state => state.bookList.bookmarkList);
  const dispatch = useDispatch();

  useEffect(() => {
    const setBmList = getBookmarkList(recipes);
    dispatch(actionBook.addToBookmark(setBmList));
  }, [recipes]);

  const recDetailHandler = data => {
    navigation.navigate('ItemDetail', {data});
  };

  const optionHandler = () => {
    getOptionBox(true);
  };

  const deleteHandler = itemId => {
    dispatch(actionBook.removeBookmark(itemId));
    getOptionBox(false);
  };

  return (
    <View style={styles.container}>
      <HeaderBar />
      <Bookmark
        data={bmList}
        goToDetalAction={recDetailHandler}
        options={optionHandler}
        visible={optionBox}
        deleteAction={deleteHandler}
      />
    </View>
  );
};

export default BookmarkList;
