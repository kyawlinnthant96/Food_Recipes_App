import {View, Text} from 'react-native';
import React from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
import * as actionIng from '../../../store/action/ingredients';
// style
// components
import {IngredientList, setToastMsg} from '@components';

const PickIngredient = ({navigation}) => {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.ingList.pickIngredient);

  const saveIngHandler = (data) => {
    const {amount} = data;
    try {
      if (data[1].length > 0) {
        dispatch(actionIng.pickIngList(data));
        setToastMsg('Add ingredent');
      } else {
        setToastMsg('Please fill the require field');
      }
    } catch (error) {
      setToastMsg('Something Wrong');
    }
  };

  return (
    <View>
      <IngredientList goSaveIng={saveIngHandler} />
    </View>
  );
};

export default PickIngredient;
