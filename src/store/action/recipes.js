import {
  LOAD_RECIPES,
  BOOK_RECIPES,
  ADD_RECIPES,
  UPDATE_RECIPES,
  REMOVE_RECIPES,
} from '../type';

export const loadRecList = (data) => {
  return {
    type: LOAD_RECIPES,
    payload: data,
  };
};
export const bookUpdateRecList = (data) => {
  return {
    type: BOOK_RECIPES,
    payload: data,
  };
};

export const createRecipe = (data) => {
  return {
    type: ADD_RECIPES,
    payload: data,
  };
};
export const updateRecipe = (data) => {
  return {
    type: UPDATE_RECIPES,
    payload: data,
  };
};

export const removeCreateRecipes = (data) => {
  return {
    type: REMOVE_RECIPES,
    payload: data,
  };
};
