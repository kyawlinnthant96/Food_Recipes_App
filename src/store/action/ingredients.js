import {
  ADD_INGREDIENTS,
  PICK_INGREDIENT,
  REMOVE_SUBING,
  EDIT_INGREDIENT,
} from '../type';

export const loadIngList = (data) => {
  return {
    type: ADD_INGREDIENTS,
    payload: data,
  };
};

export const pickIngList = (data) => {
  return {
    type: PICK_INGREDIENT,
    payload: data,
  };
};
export const remIngList = (data) => {
  return {
    type: REMOVE_SUBING,
    payload: data,
  };
};
export const editIngList = (data) => {
  return {
    type: EDIT_INGREDIENT,
    payload: data,
  };
};
