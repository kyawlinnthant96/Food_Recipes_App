import React, {useEffect} from 'react';

// style
import styles from './style';
// components
import {RecipeForm, setToastMsg} from '@components';
// redux
import {useDispatch, useSelector} from 'react-redux';
import * as actionIng from '../../../store/action/ingredients';
import * as actionRec from '../../../store/action/recipes';

const EditRecipes = ({route, navigation}) => {
  const currData = route?.params?.data;
  const dispatch = useDispatch();
  const curPickIngList = useSelector((state) => state.ingList.pickIngredient);

  useEffect(() => {
    dispatch(actionIng.editIngList(currData.ingredients));
  }, [currData]);

  const pickIngHandler = () => {
    let title = 'Add your Ingredients';
    navigation.navigate('IngList', {title});
  };

  const delPickIngHandler = (data) => {
    try {
      dispatch(actionIng.remIngList(data));
      setToastMsg('Remove ingredients');
    } catch (error) {
      setToastMsg('Something wrong');
    }
  };

  const editRecipeHandler = (data) => {
    const updateData = {
      categoryId: data.catId,
      recipeId: currData.recipeId,
      title: data.recTitle,
      time: data.time,
      photo_url: data.photo_url,
      ingredients: [...curPickIngList],
      description: data.description,
      isBookMark: false,
    };
    try {
      dispatch(actionRec.updateRecipe(updateData));
      setToastMsg('Update recipes successful');
      navigation.navigate('CatList');
    } catch (error) {
      setToastMsg('Something Wrong Edit', error.message);
      console.log(error);
    }
  };

  return (
    <RecipeForm
      initialValue={{
        catId: currData.categoryId,
        recTitle: currData.title,
        time: currData.time,
        photo_url: currData.photo_url,
        description: currData.description,
      }}
      pickIngAction={pickIngHandler}
      completeRecipeAction={editRecipeHandler}
      deletePickIngAction={delPickIngHandler}
    />
  );
};

export default EditRecipes;
