import {ADD_BOOKMARK, REMOVE_BOOKMARK} from '../type';

const initialState = {
  bookmarkList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarkList: action.payload,
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(
          item => item.recipeId !== action.payload,
        ),
      };
    default:
      return {
        bookmarkList: state.bookmarkList,
      };
  }
};
