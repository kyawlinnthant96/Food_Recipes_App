import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

// style
import styles from './style';

// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionRec from '../../store/action/recipes';

// components
import {RecipeLists, SearchBar, setToastMsg} from '@components';

// mockdata
import {
  getRecByCatName,
  getRecByRecName,
  getCategoryName,
} from '../../data/MockData';

const RecipeSearch = ({navigation}) => {
  const recipesData = useSelector((state) => state.recList.recipesList);
  const categoryData = useSelector((state) => state.catList.categoryLists);
  const [term, setTerm] = useState('');
  const [curData, setCurData] = useState(recipesData);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurData(recipesData);
  }, [recipesData]);

  const handleSearch = (text) => {
    let recipesArr1 = getRecByCatName(text, categoryData, recipesData);
    let recipesArr2 = getRecByRecName(text, recipesData);
    let combineArr = recipesArr1.concat(recipesArr2);
    let newArray = [...new Set(combineArr)];
    if (text == '') {
      setCurData([]);
    } else {
      setCurData(newArray);
    }
  };

  const bookMarkHandler = (itemId) => {
    dispatch(actionRec.bookUpdateRecList(itemId));
  };
  const recDetailHandler = (data) => {
    navigation.navigate('Home', {screen: 'ItemDetail', params: {data}});
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        option2={{marginVertical: 10}}
        option={{flex: 1}}
        term={term}
        setTerm={setTerm}
        startSearch={() => handleSearch(term)}
      />
      <RecipeLists
        data={curData}
        bookMarkAction={bookMarkHandler}
        recDetailAction={recDetailHandler}
      />
    </SafeAreaView>
  );
};

export default RecipeSearch;
