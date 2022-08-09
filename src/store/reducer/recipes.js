import {LOAD_RECIPES, BOOK_RECIPES} from '../type';

const initialState = {
  recipesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {...state, recipesList: action.payload};
    case BOOK_RECIPES:
      return {...state, recipesList: action.payload};

    default:
      return {
        recipesList: state.recipesList,
      };
  }
};
