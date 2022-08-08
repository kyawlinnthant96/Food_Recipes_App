import {ADD_INGREDIENTS} from '../type';

const initialState = {
  ingredientsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {...state, ingredientsList: action.payload};

    default:
      return {
        ingredientsList: state.ingredientsList,
      };
  }
};
