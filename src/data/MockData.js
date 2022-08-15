export const getNumberOfRecipes = (categoryID, recipes) => {
  let count = 0;
  recipes.map((data) => {
    if (data.categoryId === categoryID) {
      count++;
    }
  });
  return count;
};

export const getRecipes = (categoryId, recipes) => {
  const recipesArray = [];
  recipes.map((data) => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
};

export const getCategoryName = (categoryId, categories) => {
  let name;
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
};

export const getIngredientUrl = (ingredientID, ingredients) => {
  let url;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
};

export const getAllIngredients = (idArray, ingredients) => {
  const ingredientsArray = [];
  idArray.map((index) => {
    ingredients.map((data) => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
};

export const getIngredientName = (ingredientID, ingredients) => {
  let name;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
};

export const getRecipesByIngredient = (ingredientId, recipes) => {
  const recipesArray = [];
  recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
};

export const getBookmarkList = (recArray) => {
  const bookmarkList = [];
  recArray.map((data) => {
    if (data.isBookMark) {
      bookmarkList.push(data);
    }
  });
  return bookmarkList;
};

export const getNameArray = (catArr) => {
  const nameArray = [];
  catArr.map((item) => {
    nameArray.push(item.name);
  });
  return nameArray;
};

// search
export const getRecByCatName = (categoryName, categories, recipes) => {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipe = getRecipes(data.id, recipes);
      recipe.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
};

export const getRecByRecName = (recipeName, recipes) => {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
};
