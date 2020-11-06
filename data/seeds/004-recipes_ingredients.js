exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "2 slices" },
        { recipe_id: 1, ingredient_id: 2, quantity: "1/2 TBSP" },
        { recipe_id: 1, ingredient_id: 3, quantity: "1 slice" },
        { recipe_id: 2, ingredient_id: 4, quantity: "2 buns" },
        { recipe_id: 2, ingredient_id: 5, quantity: "1/4 lb of meat" },
        { recipe_id: 2, ingredient_id: 6, quantity: "1 slice" },
      ]);
    });
};
