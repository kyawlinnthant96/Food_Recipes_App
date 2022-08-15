import {
  ADD_INGREDIENTS,
  PICK_INGREDIENT,
  ADD_RECIPES,
  REMOVE_SUBING,
  EDIT_INGREDIENT,
  UPDATE_RECIPES,
} from '../type';

const initialState = {
  ingredientsList: [],
  pickIngredient: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {...state, ingredientsList: action.payload, pickIngredient: []};
    case PICK_INGREDIENT:
      return {
        ...state,
        pickIngredient: [...state.pickIngredient, action.payload],
      };
    case ADD_RECIPES:
      return {
        ...state,
        pickIngredient: [],
      };
    case UPDATE_RECIPES:
      return {
        ...state,
        pickIngredient: [],
      };
    case EDIT_INGREDIENT:
      return {
        ...state,
        pickIngredient: action.payload,
      };

    case REMOVE_SUBING:
      const curId = action.payload.ingredientId;

      return {
        ...state,
        pickIngredient: state.pickIngredient.filter(
          (item) => item[0] !== curId,
        ),
      };
    default:
      return {
        ingredientsList: state.ingredientsList,
        pickIngredient: state.pickIngredient,
      };
  }
};
