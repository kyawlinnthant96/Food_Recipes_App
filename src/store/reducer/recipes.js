import {LOAD_RECIPES, BOOK_RECIPES, REMOVE_BOOKMARK} from '../type';

const initialState = {
  recipesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {...state, recipesList: action.payload};
    case BOOK_RECIPES:
      let curId = action.payload;
      let newData = state.recipesList.map(item =>
        item.recipeId === curId
          ? {...item, isBookMark: !item.isBookMark}
          : item,
      );
      return {...state, recipesList: newData};
    case REMOVE_BOOKMARK:
      let unMarkData = state.recipesList.map(item =>
        item.recipeId === action.payload
          ? {...item, isBookMark: !item.isBookMark}
          : item,
      );
      return {...state, recipesList: unMarkData};
    default:
      return {
        recipesList: state.recipesList,
      };
  }
};
