exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instruction: "Spread butter on outside of bread",
          step_number: 1,
          recipe_id: 1,
        },
        {
          instruction: "Put cheese inbetween non buttered bread sides",
          step_number: 2,
          recipe_id: 1,
        },
        {
          instruction:
            "Put sandwich on hot skillet until the side down is golden brown",
          step_number: 3,
          recipe_id: 1,
        },
        {
          instruction: "Flip and repeat on other side",
          step_number: 4,
          recipe_id: 1,
        },
        {
          instruction: "Take sandwich out of pan and enjoy",
          step_number: 5,
          recipe_id: 1,
        },

        {
          instruction:
            "Put hamburger patty on hot skillet, cook 4-5 minutes on each side",
          step_number: 1,
          recipe_id: 2,
        },
        {
          instruction:
            "Put cheese slice ontop of patty in the skillet, let cheese melt",
          step_number: 2,
          recipe_id: 2,
        },
        {
          instruction: "Take burger off of skillet and put inbetween buns",
          step_number: 3,
          recipe_id: 2,
        },
      ]);
    });
};
