import {ADD_CATLIST} from '../type';

export const addToCat = value => {
  return {
    type: ADD_CATLIST,
    payload: value,
  };
};
