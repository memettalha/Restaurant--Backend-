import knex from "knex";

export const Ingredients = {
    getAll: () => {
        return knex('ingredients').whereNull('deleted_at')
    },
    getById : (id) => {
        return knex('ingredients').whereNull('deleted_at').where({id}).first()
    },
    update: (id,Ingredients) => {
        Ingredients.updated_at = new Date()
        return knex('ingredients').whereNull('deleted_at').where({id}).update(Ingredients)
    },
    delete: (id) => {
        return knex('ingredients').whereNull('deleted_at').where({id}).update({deleted_at:knex.fn.now()})
    }
}