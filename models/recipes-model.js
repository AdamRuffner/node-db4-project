const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .join('ingredients as i', "ri.ingredient_id", 'i.id')
        .select('i.name as ingredient', 'ri.quantity')
        .where({ 'ri.recipe_id': recipe_id })
}

function getInstructions(id) {
    return db('instructions as i') 
    .where({ 'i.recipe_id': recipe_id })
}