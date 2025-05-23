/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


export const up = async (knex) => {
    return knex.schema.createTable('products',function(table){
        table.increments('id').primary();
        table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
        table.string('name').notNullable();
        table.text('description');
        table.integer('price')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at')
        table.timestamp('deleted_at').nullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down  = async (knex) =>{
  return knex.schema.dropTable('products')
};
