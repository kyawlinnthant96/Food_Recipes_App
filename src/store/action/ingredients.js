import {ADD_INGREDIENTS} from '../type';

export const loadIngList = data => {
  return {
    type: ADD_INGREDIENTS,
    payload: data,
  };
};
