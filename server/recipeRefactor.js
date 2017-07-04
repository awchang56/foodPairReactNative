const refactor = recipes => {
  return recipes.map(item => {
    return {
      uri: item.recipe.uri,
      label: item.recipe.label,
      image: item.recipe.image,
      source: item.recipe.source,
      url: item.recipe.url,
      healthLabels: item.recipe.healthLabels,
      ingredients: item.recipe.ingredients.map(ingredient => {
        return {
          text: ingredient.text,
          food: ingredient.food
        };
      })
    };
  });
};

module.exports = {
  refactor: refactor,
}