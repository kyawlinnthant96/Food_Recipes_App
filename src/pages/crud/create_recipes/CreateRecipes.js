import React, {useEffect} from 'react';

// components
import {RecipeForm} from '@components';

// style
import styles from './style';

// redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionIng from '../../../store/action/ingredients';
import * as actionRec from '../../../store/action/recipes';
// components
import {setToastMsg} from '@components';
// storage
import {localStorage, key} from '../../../utils/localStorage';
import {ingredients} from '../../../data/SampleData';

// hooks
import {useLocal} from '../../../hooks';

const CreateRecipes = ({navigation}) => {
  const local = useLocal();
  const dispatch = useDispatch();
  const curPickIngList = useSelector((state) => state.ingList.pickIngredient);

  useEffect(() => {
    dispatch(actionIng.loadIngList(ingredients));
  }, []);

  const pickIngHandler = () => {
    let title = 'Add your Ingredients';
    navigation.navigate('IngList', {title});
  };
  const usertoken = localStorage.getItem('@UserId:token');

  const createRecipeHandler = (data) => {
    const createData = {
      categoryId: data.catId,
      recipeId: 1,
      title: data.recTitle,
      time: data.time,
      photo_url: data.photo_url,
      ingredients: [...curPickIngList],
      description: data.description,
      isBookMark: false,
    };
    try {
      dispatch(actionRec.createRecipe(createData));
      localStorage.setItem('@User:recipe', JSON.stringify(createData));
      setToastMsg(local.createRecSuccess);
      navigation.goBack();
    } catch (error) {
      setToastMsg(local.error);
      console.log(error.message);
    }
  };

  const delPickIngHandler = (data) => {
    try {
      dispatch(actionIng.remIngList(data));
      setToastMsg(local.rmvSuccess);
    } catch (error) {
      setToastMsg(local.error);
    }
  };

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <RecipeForm
      pickIngAction={pickIngHandler}
      completeRecipeAction={createRecipeHandler}
      deletePickIngAction={delPickIngHandler}
      backAction={backHandler}
    />
  );
};

export default CreateRecipes;
