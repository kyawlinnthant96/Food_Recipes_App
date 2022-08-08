import {ADD_CATLIST} from '../type';

const initialState = {
  categoryLists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATLIST:
      return {...state, categoryLists: action.payload};

    default:
      return {
        categoryLists: state.categoryLists,
      };
  }
};
