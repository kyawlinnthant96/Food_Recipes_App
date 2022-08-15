import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

// style
import styles from '../main_profile/style';

// storage
import {localStorage, keys} from '../../../utils/localStorage';

// components
import {Bookmark, setToastMsg} from '@components';

// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionRec from '../../../store/action/recipes';

const OwnRecipes = ({navigation}) => {
  const yourRecipe = useSelector((state) => state.recList.createList);
  const [recipe, setRecipe] = useState(yourRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    setRecipe(yourRecipe);
  }, [yourRecipe]);

  const deleteHandler = (data) => {
    dispatch(actionRec.removeCreateRecipes(data));
    localStorage.removeItem('@User@recipe');
    setToastMsg('Remove your recipes successful');
  };

  const goDetailHandler = (data) => {
    navigation.navigate('Home', {screen: 'ItemDetail', params: {data}});
  };

  return (
    <View>
      {recipe.length > 0 && (
        <Bookmark
          data={recipe}
          goToDetalAction={goDetailHandler}
          deleteAction={deleteHandler}
        />
      )}
    </View>
  );
};

export default OwnRecipes;
// goToDetalAction={}
//   deleteAction={}
