import {LOAD_RECIPES, BOOK_RECIPES} from '../type';

export const loadRecList = data => {
  return {
    type: LOAD_RECIPES,
    payload: data,
  };
};
export const bookUpdateRecList = data => {
  return {
    type: BOOK_RECIPES,
    payload: data,
  };
};
