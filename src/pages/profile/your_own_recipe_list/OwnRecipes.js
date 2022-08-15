import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

// style
import styles from './style';
import EmptyRecipe from '@assets/icons/EmptyRecipe';

// storage
import {localStorage, keys} from '../../../utils/localStorage';

// components
import {Bookmark, setToastMsg} from '@components';

// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';

// hooks
import {useLocal} from '../../../hooks';

const OwnRecipes = ({navigation}) => {
  const local = useLocal();
  const yourRecipe = useSelector((state) => state.recList.createList);
  const [recipe, setRecipe] = useState(yourRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    setRecipe(yourRecipe);
  }, [yourRecipe]);

  const deleteHandler = (data) => {
    dispatch(actionRec.removeCreateRecipes(data));
    localStorage.removeItem('@User:recipe');
    setToastMsg(local.rmvUrRec);
  };

  const goDetailHandler = (data) => {
    navigation.navigate('Home', {screen: 'ItemDetail', params: {data}});
  };

  return (
    <View style={styles.container}>
      {recipe.length > 0 ? (
        <Bookmark
          data={recipe}
          goToDetalAction={goDetailHandler}
          deleteAction={deleteHandler}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyBox}>
            <EmptyRecipe width={150} height={150} />
            <Text style={styles.emptyText}>No Recipes yet</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default OwnRecipes;
