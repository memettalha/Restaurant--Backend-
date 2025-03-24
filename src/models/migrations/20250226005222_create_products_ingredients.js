/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>{
  return knex.schema.createTable('product_ingredients',function(table){
    table.increments('id').primary();
    table.integer('product_id').references('id').inTable('products').onDelete('CASCADE');
    table.integer('ingredient_id').references('id').inTable('ingredients').onDelete('CASCADE');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) =>{
  return knex.schema.dropTable('product_ingredients')
};
