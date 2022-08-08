import {recipes, ingredients, categories} from './SampleData';

export const getNumberOfRecipes = categoryID => {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId === categoryID) {
      count++;
    }
  });
  return count;
};

export const getRecipes = categoryId => {
  const recipesArray = [];
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
};

export const getCategoryName = categoryId => {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
};

export const getIngredientUrl = ingredientID => {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
};

export const getAllIngredients = idArray => {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
};

export const getIngredientName = ingredientID => {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
};

export const getRecipesByIngredient = ingredientId => {
  const recipesArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
};
