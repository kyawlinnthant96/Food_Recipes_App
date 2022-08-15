import {
  LOAD_RECIPES,
  BOOK_RECIPES,
  REMOVE_BOOKMARK,
  ADD_RECIPES,
  UPDATE_RECIPES,
  REMOVE_RECIPES,
} from '../type';

const initialState = {
  recipesList: [],
  createList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {...state, recipesList: action.payload};
    case BOOK_RECIPES:
      let curId = action.payload;
      let newData = state.recipesList.map((item) =>
        item.recipeId === curId
          ? {...item, isBookMark: !item.isBookMark}
          : item,
      );
      return {...state, recipesList: newData};
    case REMOVE_BOOKMARK:
      let unMarkData = state.recipesList.map((item) =>
        item.recipeId === action.payload
          ? {...item, isBookMark: !item.isBookMark}
          : item,
      );
      return {...state, recipesList: unMarkData};
    case ADD_RECIPES:
      return {
        ...state,
        recipesList: [...state.recipesList, action.payload],
        createList: [...state.createList, action.payload],
      };
    case UPDATE_RECIPES:
      let curData = action.payload;
      let recIndex = state.recipesList.findIndex(
        (item) => item.recipeId === curData.recipeId,
      );
      const updateRecipe = [...state.recipesList];
      updateRecipe[recIndex] = curData;
      return {
        ...state,
        recipesList: updateRecipe,
      };
    case REMOVE_RECIPES:
      return {
        ...state,
        createList: state.createList.filter(
          (item) => item.recipeId !== action.payload,
        ),
      };

    default:
      return {
        recipesList: state.recipesList,
        createList: state.createList,
      };
  }
};
