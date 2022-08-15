import {View, Text} from 'react-native';
import React from 'react';
// redux
import {useDispatch, useSelector} from 'react-redux';
import * as actionIng from '../../../store/action/ingredients';
// style
// components
import {IngredientList, setToastMsg} from '@components';
// hooks
import {useLocal} from '../../../hooks';

const PickIngredient = ({navigation}) => {
  const local = useLocal();
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.ingList.pickIngredient);

  const saveIngHandler = (data) => {
    const {amount} = data;
    try {
      if (data[1].length > 0) {
        dispatch(actionIng.pickIngList(data));
        setToastMsg(local.addIngText);
      } else {
        setToastMsg(local.validLogError);
      }
    } catch (error) {
      setToastMsg(local.error);
    }
  };

  return (
    <View>
      <IngredientList goSaveIng={saveIngHandler} />
    </View>
  );
};

export default PickIngredient;
